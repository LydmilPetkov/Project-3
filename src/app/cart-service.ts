import { Injectable } from '@angular/core';
import { productInterface } from './product-interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: productInterface[] = [];

  addToCart(product: productInterface) {
    let existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.qtty++;
    } else {
      this.cart.push({ ...product });
    }
  }

  getCart() {
    return this.cart;
  }

  calcTotal() {
    let total = 0;
    for (let val of this.cart) {
      total = total + val.price * val.qtty;
    }
    return total;
  }
  constructor() {}
}
