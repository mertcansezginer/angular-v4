import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../interfaces/iproduct';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})


export class ProductUpdateComponent  {

  deger:any;
  dataLoaded : boolean = false;
  route: ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);

  product : IProduct | undefined;
  applyForm = this.fb.group({
    unitPrice: 0,
    categoryId: 0,
    unitsInStock: 0,
    reorderLevel: 0,
    discontinued: false,
    name: ''
  });



  constructor(private fb : FormBuilder, private router: Router) {
    const productId = Number(this.route.snapshot.params['id']);
    this.productService.getById(productId).subscribe(product => {
      this.product = product;
      this.applyForm.patchValue({
        unitPrice: this.product?.unitPrice,
        categoryId: this.product?.categoryId,
        unitsInStock: this.product?.unitsInStock,
        reorderLevel: this.product?.reorderLevel,
        discontinued: this.product?.discontinued,
        name: this.product?.name
      });
      this.dataLoaded = true;
    });
}

submitApplication() {
  const product : IProduct = 
  {
    id:this.product?.id ?? 0,
    categoryId:this.applyForm.value.categoryId ?? 0,
    unitPrice: this.applyForm.value.unitPrice ?? 0,
    unitsInStock: this.applyForm.value.unitsInStock ?? 0,
    reorderLevel:  this.applyForm.value.reorderLevel ?? 0,
    discontinued:  this.applyForm.value.discontinued ?? false,
    name: this.applyForm.value.name ?? '',
  }; 
  console.log(product);
  this.productService.update(product).subscribe(()=> {
    this.router.navigate(['products'])
  });
}
}
// 