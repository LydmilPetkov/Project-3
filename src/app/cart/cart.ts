import { Component } from '@angular/core';
import { productInterface } from '../product-interface';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cart: productInterface[] = [];
  total: number = 0;
  taxRate: number = 0.1;
  taxAmount: number = 0;
  totalWithTax: number = 0;
  discountRate: number = 0.15;
  discount: number = 0;
  finalTotal: number = 0;
  totalStr: string = '';
  taxAmountStr: string = '';
  totalWithTaxStr: string = '';
  discountStr: string = '';
  finalTotalStr: string = '';
  qualifiesForDiscount: boolean = false;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
    this.recalculateTotals();
  }

  recalculateTotals() {
    this.total = this.cartService.calcTotal();
    this.taxAmount = this.total * this.taxRate;
    this.totalWithTax = this.total + this.taxAmount;
    this.qualifiesForDiscount = this.totalWithTax > 10000;
    this.discount = this.qualifiesForDiscount
      ? this.totalWithTax * this.discountRate
      : 0;
    this.finalTotal = this.totalWithTax - this.discount;
    this.totalStr = this.total.toFixed(2);
    this.taxAmountStr = this.taxAmount.toFixed(2);
    this.totalWithTaxStr = this.totalWithTax.toFixed(2);
    this.discountStr = this.discount.toFixed(2);
    this.finalTotalStr = this.finalTotal.toFixed(2);
  }

  increaseQtty(item: productInterface) {
    item.qtty++;
    this.recalculateTotals();
  }

  decreaseQtty(item: productInterface) {
    item.qtty--;
    if (item.qtty < 1) {
      this.removeItem(item);
    }
    this.recalculateTotals();
  }

  removeItem(item: productInterface) {
    this.cart = this.cart.filter((i) => i.id !== item.id);
    // Also update the cart in the service if needed
    const serviceCart = this.cartService.getCart();
    const idx = serviceCart.findIndex((i) => i.id === item.id);
    if (idx > -1) serviceCart.splice(idx, 1);
    this.recalculateTotals();
  }
}
