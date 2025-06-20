import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productInterface } from '../../product-interface';
import { myProducts } from '../../product-list';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
})
export class ProductDetails {
  product: productInterface | undefined;
  constructor(private route: ActivatedRoute) {
    let productNum = Number(this.route.snapshot.params['id']);
    this.product = myProducts.find((item) => item.id === productNum);
    console.log(this.product);
  }
}
