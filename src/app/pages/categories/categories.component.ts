import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ICategory } from '../../interfaces/icategory';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  
  constructor(private categoryService: CategoryService){}

  CategoryList : ICategory[] = []; 

  removeCategory(categoryId: number)
  {
    this.categoryService.delete(categoryId).subscribe(()=>
      {
        this.ngOnInit();
      }
    );
  }

  ngOnInit() {   
    this.categoryService.getAll().subscribe((data) => { 
      this.CategoryList = data;
      console.log(this.CategoryList);
    });
  }
}

