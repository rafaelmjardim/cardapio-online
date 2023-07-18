import { Injectable } from '@angular/core';
import { Product } from '../products-cards/products-cards';
import { Pedido } from './cart';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.prod';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItens: Product[] = []

  constructor(private http: HttpClient) { }

  setCartItens = (product: Product) => {
    this.cartItens.push(product);
        
  }

  postPedido = (pedido: Pedido) => {
    return this.http.post(`${API_KEY}/pedidos`, {
      id_cliente: pedido.id_cliente,
      mesa: pedido.mesa,
      lista_carrinho: pedido.lista_carrinho
    })
  }
}
