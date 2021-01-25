import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  items;
  product;

  constructor(private cartService: CartService) { }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
  }

}
