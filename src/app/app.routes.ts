import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryUpdateComponent } from './pages/category-update/category-update.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title:'Home'
  },
  {
    path:'categories',
    component: CategoriesComponent,
    title:'Categories'
  },
  {
    path:'categories/update/:id',
    component: CategoryUpdateComponent,
    title:'Categories'
  },
  {
    path:'products',
    component: ProductsComponent,
    title:'Products'
  },
  {
    path:'products/update/:id',
    component: ProductUpdateComponent,
    title:'Products'
  }

];
