import { Injectable } from '@angular/core';
import { Product } from '../products-cards/products-cards';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItens: Product[] = []
  // newCartItens: Cart[] = []

  constructor() { }

  setCartItens = (product: Product) => {

    // this.newCartItens = [
    //   {
    //     id_produto: cod_prod,
    //     id_cliente: id_cliente,
    //     mesa: mesa
    //   }
    // ]

    this.cartItens.push(product);
    
    console.log(' items do servico',this.cartItens);
    
  }
}
