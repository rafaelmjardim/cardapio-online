import { Injectable } from '@angular/core';
import { Product } from '../products-cards/products-cards';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItens: Cart[] = []
  newCartItens: Cart[] = []

  constructor() { }

  setCartItens = (cod_prod: number, id_cliente: number, mesa: number) => {

    this.newCartItens = [
      {
        id_produto: cod_prod,
        id_cliente: id_cliente,
        mesa: mesa
      }
    ]

    this.cartItens.push(...this.newCartItens);
    
    console.log(' items do servico',this.cartItens);
    
  }
}
