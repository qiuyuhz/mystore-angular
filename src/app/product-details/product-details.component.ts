import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {products,Product} from '../products'
import {CartService} from "../cart.service"
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product :Product|undefined;
  constructor(private route:ActivatedRoute,private cartService:CartService){

  }
  ngOnInit(){
    const routerParams = this.route.snapshot.paramMap;
    const id = Number(routerParams.get('id'));
    this.product = products.find(p=>p.id==id);
  }
  addToCart(product:Product){
    this.cartService.addToCart(product);
    window.alert('你添加了商品到购物车')
  }

}
