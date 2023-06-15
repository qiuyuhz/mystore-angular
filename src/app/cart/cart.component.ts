import { Component } from '@angular/core';
import {CartService} from '../cart.service'
import{ FormBuilder}from '@angular/forms'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartservice.getItems()
  checkoutForm = this.frombuilder.group({
    name:'',
    address:''
  });
  constructor(private cartservice:CartService,private frombuilder:FormBuilder){

  }
  onSubmit(){
    this.items =[];
    this.cartservice.clearCart();
    this.checkoutForm.reset();
  }


}
