import { Injectable } from '@angular/core';
import { Order } from './cart';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.prod';
import { Product } from '../products-cards/products-cards';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItens: Product[] = []
  quantityCount: number = 0

  constructor(private http: HttpClient) { }

  setCartItens = (product: Product, quantity: number) => {
    this.cartItens.push({...product, quantidade: quantity});

    //Armazena uma contagem conforme é adicionado quantidade de item
    this.quantityCount = this.quantityCount + quantity;            
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
