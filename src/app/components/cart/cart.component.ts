import { Component, OnInit } from '@angular/core';
import { Product } from '../products-cards/products-cards';
import { CartService } from './cart.service';
import { Cart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // cartItens: Cart[] = [];

  constructor (private cart_service: CartService){}
  ngOnInit(): void {
    // console.log('init', this.cart_service.cartItens);
    // this.cartItens = this.cart_service.cartItens;
  }
}
