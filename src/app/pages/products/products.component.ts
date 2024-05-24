import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productService = inject(ProductService);

  ProductList : IProduct[] = []; 

  removeProduct(productId: number)
  {
    console.log(productId);
    this.productService.delete(productId).subscribe(()=>
      {
        this.ngOnInit();
      }
    );
  }

  ngOnInit() {   
    this.productService.getAll().subscribe((data) => { 
      this.ProductList = data;
      console.log(this.ProductList);
    });
  }
}