import { Routes } from '@angular/router';
import { Main } from './main/main';
import { About } from './about/about';
import { Products } from './products/products';
import { Cart } from './cart/cart';
import { ProductDetails } from './products/product-details/product-details';

export const routes: Routes = [
  {
    path: '',
    component: Main,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'details',
    component: ProductDetails,
  },
];
