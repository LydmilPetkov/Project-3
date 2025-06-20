import { Component } from '@angular/core';
import { productInterface } from '../product-interface';
import { myProducts } from '../product-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: productInterface[] = myProducts;
}
