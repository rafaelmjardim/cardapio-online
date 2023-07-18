import { Injectable } from '@angular/core';
import { Product } from '../products-cards/products-cards';
import { Pedido } from './cart';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItens: Product[] = []
  // newCartItens: Cart[] = []

  constructor(private http: HttpClient) { }

  setCartItens = (product: Product) => {
    this.cartItens.push(product);
    
    // console.log(' items do servico',this.cartItens);
    
  }

  postPedido = (pedido: Pedido) => {
    return this.http.post(`http://localhost:3000/pedido`, {
      id_cliente: pedido.id_cliente,
      mesa: pedido.mesa,
      lista_carrinho: pedido.lista_carrinho
    })
  }
}
