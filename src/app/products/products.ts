import { Component } from '@angular/core';
import { productInterface } from '../product-interface';
import { myProducts } from '../product-list';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart-service';
@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: productInterface[] = myProducts;

  constructor(private cs: CartService) {}

  addToCart(product: productInterface) {
    this.cs.addToCart(product);
    alert('Product added to cart');
  }
}
