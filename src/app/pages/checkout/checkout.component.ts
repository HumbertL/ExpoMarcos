import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Product } from 'src/app/shared/interfaces/product';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  addressFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  PaymentMethod = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  cart: Product[] = []
  
  constructor(private _formBuilder: FormBuilder) {
    this.cart = [];
  }

  ngOnInit(): void {
    const cartString = localStorage.getItem('cart');
    if (cartString) {
      this.cart = JSON.parse(cartString);
    }
    console.log(this.cart);
  }




}
