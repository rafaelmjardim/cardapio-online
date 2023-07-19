import { Injectable } from '@angular/core';
import { Product } from '../products-cards/products-cards';
import { Order } from './cart';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.prod';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItens: Product[] = []

  constructor(private http: HttpClient) { }

  setCartItens = (product: Product, quantity: number) => {
    this.cartItens.push({...product, quantidade: quantity});
        
  }

  postPedido = (pedido: Order) => {
    return this.http.post(`${API_KEY}/pedidos`, {
      id_cliente: pedido.id_cliente,
      mesa: pedido.mesa,
      lista_carrinho: pedido.lista_carrinho,
      data_venda: pedido.data_venda,
      form_pag: 1,
      entrega: false,
      finalizado: false,
    })
  }
}
