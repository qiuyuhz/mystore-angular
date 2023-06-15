import { Component ,OnInit} from '@angular/core';
import{Observable, observable}from 'rxjs'
import { CartService} from '../cart.service'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts!:Observable<{type:string,price:number}[]>;
  constructor(private cartservice:CartService){}
  ngOnInit(){
    this.shippingCosts = this.cartservice.getShippingPrice();
  }
}
