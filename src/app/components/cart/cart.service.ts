import { Injectable } from '@angular/core';
import { Product } from '../products-cards/products-cards';
import { Pedido } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItens: Product[] = []
  // newCartItens: Cart[] = []

  constructor() { }

  setCartItens = (product: Product) => {
    this.cartItens.push(product);
    
    // console.log(' items do servico',this.cartItens);
    
  }
}
