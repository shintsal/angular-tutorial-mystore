import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(private CartService: CartService, private formBuilder: FormBuilder) { 
    this.items = this.CartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.CartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
