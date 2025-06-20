import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { productInterface } from '../../product-interface';
import { myProducts } from '../../product-list';
import { CartService } from '../../cart-service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
})
export class ProductDetails {
  product: productInterface | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    let productNum = Number(this.route.snapshot.params['id']);
    this.product = myProducts.find((item) => item.id === productNum);
    console.log(this.product);
  }
  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert('Product added to cart');
    }
  }
}
