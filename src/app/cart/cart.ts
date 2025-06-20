import { Component } from '@angular/core';
import { productInterface } from '../product-interface';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cart: productInterface[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.calcTotal();
  }
}
