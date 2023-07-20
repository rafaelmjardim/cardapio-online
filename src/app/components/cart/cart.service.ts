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

  amountAll!: number;

  amountValues: any = []; //Rever tipagem para essa variavel

  constructor(private http: HttpClient) { }

  setCartItens = (product: Product, quantity: number, itemValue?: number) => {
    this.cartItens.push({...product, quantidade: quantity});
    localStorage.setItem('cartItens', JSON.stringify(this.cartItens))    

    //Seta os valores na variavel (para preparar para o reduce)
    this.amountValues.push(itemValue)

    //Armazena uma contagem conforme é adicionado quantidade de item
    this.quantityCount = this.quantityCount + quantity;      
    
    //Variavel para converter o valor em number[]
    const amountValuesArray: number[] = this.amountValues; //Necessario conversão para array de numeros

    //Função que acumula a soma dos valores
    amountValuesArray.reduce((acumulador, currentValue) => {
      return this.amountAll = acumulador + currentValue;
    }, 0)
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
