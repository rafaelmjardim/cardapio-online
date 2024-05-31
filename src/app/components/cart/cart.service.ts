import { Injectable } from '@angular/core';
import { Order } from './cart';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.prod';
import { Product } from '../products-cards/products-cards';
import { BehaviorSubject } from 'rxjs';

const API_KEY = environment.API_KEY;
const JSON_SERVER = environment.JSON_SERVER;

@Injectable({
  providedIn: 'root'
})
export class CartService {
  storedCartItens = localStorage.getItem('cartItens');

  private cartItensSubject = new BehaviorSubject<Product[]>(this.storedCartItens ? JSON.parse(this.storedCartItens) : []);
  cartItensStram$ = this.cartItensSubject.asObservable();
    
  quantityCount: number = 0

  constructor(private http: HttpClient) { }

  updateCartItensSubject = (newProductCart: Product, editProduceCarList?: Product[]) => {

    //Verifica se está tentando editar o carrinho (se sim vai apenas editar o produto selecionado)
    if (editProduceCarList) {
      this.cartItensSubject.next(editProduceCarList)
      return
    }

    const currentCart: Product[]  = this.cartItensSubject.value;    
    const cartList: Product[] = [...currentCart, newProductCart];
    
    this.cartItensSubject.next(cartList);
  }

  postPedido = (pedido: Order) => {
    return this.http.post(`${JSON_SERVER}/pedidos`, {
      id_cliente: pedido.id_cliente,
      mesa: pedido.mesa,
      lista_carrinho: pedido.lista_carrinho,
      data_venda: pedido.data_venda,
      form_pag: 1,
      entrega: false,
      finalizado: false,
      valor_total: pedido.valor_total
    })
  }

  returnCartItensStorge = () => {
    const cartItensString = localStorage.getItem('cartItens');

    if (cartItensString) {
      const cartItens = JSON.parse(cartItensString);
      return cartItens
    }
  }
}