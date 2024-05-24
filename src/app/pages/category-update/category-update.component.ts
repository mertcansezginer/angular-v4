import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../../interfaces/icategory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-update',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})


export class CategoryUpdateComponent  {

  deger:any;
  dataLoaded : boolean = false;
  route: ActivatedRoute = inject(ActivatedRoute);
  categoryService = inject(CategoryService);

  category : ICategory | undefined;
  applyForm = this.fb.group({
    name: [''],
    description: ['']
  });

  constructor(private fb : FormBuilder, private router: Router) {
    const categoryId = Number(this.route.snapshot.params['id']);
    this.categoryService.getById(categoryId).subscribe(category => {
      this.category = category;
      this.applyForm.patchValue({
        name: this.category?.name,
        description: this.category?.description
      });
      this.dataLoaded = true;
    });
}

submitApplication() {
  const category : ICategory = 
  {
    id:this.category?.id ?? 0,
    description:this.applyForm.value.description ?? '',
    name:this.applyForm.value.name ?? ''
  }; 

  this.categoryService.update(category).subscribe(()=> {
    this.router.navigate(['categories'])
  });
}
}
