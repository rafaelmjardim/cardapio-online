import { Injectable } from '@angular/core';
import { Order } from './cart';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.prod';
import { AdicionaisList, Product } from '../products-cards/products-cards';
import { BehaviorSubject } from 'rxjs';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItens: Product[] = [];
    
  quantityCount: number = 0

  amountAll: number = 0;

  amountValues: any = []; //Rever tipagem para essa variavel

  itemValueMultQuantity: any = 0

  clearAllValue: boolean = false;
  amountValuesArray: number[] = [0];

  constructor(private http: HttpClient) { }

  setCartItens = (product: Product, quantity: number, itemValue?: number, adicionais?: any) => {
    
    if (product) {
      this.cartItens.push({...product, quantidade: quantity, adicionais});
      this.setCartItensLocalStorge(this.cartItens);      
    }
    
    if (itemValue){
      //Multiplica a quantidade de iten ao valor do item 
      this.itemValueMultQuantity =  itemValue * quantity   
      
      //Seta os valores na variavel (para preparar para o reduce)
      this.amountValues.push(this.itemValueMultQuantity)
    }

    this.setQuantityCount(quantity);
    
    //Variavel para converter o valor em number[]
    this.amountValuesArray = this.amountValues; //Necessario conversão para array de numeros
  
    //Se tiver valor no array de amount chama a função para fazer o acumulador
    if(this.amountValuesArray) {
      this.accumulateValuesAmount();
    }
  }

  setQuantityCount = (quantity: number) => {
    //Armazena uma contagem conforme é adicionado quantidade de item
    this.quantityCount = this.quantityCount + quantity; 

    localStorage.setItem('quantityCount', JSON.stringify(this.quantityCount));
}

  accumulateValuesAmount = () => {
    this.amountAll = this.amountValuesArray.reduce((acumulador, currentValue) => {
      return acumulador + currentValue;
    }, 0)

    localStorage.setItem('amountAll', JSON.stringify(this.amountAll))
    
  }

  //Limpa o acumulador
  cleanAccumulateValuesAmount = () => {
    this.amountAll = 0;
    this.amountValues = [];
    this.quantityCount = 0;
    this.accumulateValuesAmount();
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

  //Função que envia os objetos para a localStorge
  setCartItensLocalStorge = (cartItens: Product[]) => {
    localStorage.setItem('cartItens', JSON.stringify(cartItens))
  }


  //Gets do local storge

  getCartItens = () => {
    const cartItensString = localStorage.getItem('cartItens');

    if (cartItensString) {
      this.cartItens = JSON.parse(cartItensString);      
    }    
  }

  getAmountAll = () => {
    if (localStorage.getItem('amountAll')){

      const amountAllString = localStorage.getItem('amountAll');

      if (amountAllString) {
        this.amountAll = JSON.parse(amountAllString);
      }
    }
  }

  getQuantityCount = () => {
    if (localStorage.getItem('quantityCount')) {
      
      const quantityCountString = localStorage.getItem('quantityCount');

      if (quantityCountString) {
        this.quantityCount = JSON.parse(quantityCountString);
      }
    }
  }
}