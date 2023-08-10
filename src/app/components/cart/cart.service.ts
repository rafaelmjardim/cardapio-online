import { Injectable } from '@angular/core';
import { Order } from './cart';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.prod';
import { AdicionaisList, Product } from '../products-cards/products-cards';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItens: Product[] = []
  quantityCount: number = 0

  amountAll!: number;

  amountValues: any = []; //Rever tipagem para essa variavel

  itemValueMultQuantity: any = 0

  clearAllValue: boolean = false;
  amountValuesArray!: number[];

  constructor(private http: HttpClient) { }

  setCartItens = (product: Product, quantity: number, itemValue?: number, adicionais?: any) => {
    if(adicionais) {
      this.cartItens.push({...product, quantidade: quantity, adicionais});
      
    }
    this.cartItens.push({...product, quantidade: quantity, adicionais});

    console.log('itens', this.cartItens);      
    
    // localStorage.setItem('cartItens', JSON.stringify(this.cartItens))   
    
    if (itemValue){
      //Multiplica a quantidade de iten ao valor do item 
      this.itemValueMultQuantity =  itemValue * quantity   
      
      //Seta os valores na variavel (para preparar para o reduce)
      this.amountValues.push(this.itemValueMultQuantity)
    }

    //Armazena uma contagem conforme é adicionado quantidade de item
    this.quantityCount = this.quantityCount + quantity;      
    
    //Variavel para converter o valor em number[]
    this.amountValuesArray = this.amountValues; //Necessario conversão para array de numeros
  
    this.amountValuesArray.reduce((acumulador, currentValue) => {
      if (this.cartItens.length >= 2){
        return this.amountAll = acumulador + currentValue;
      }else {
        return this.amountAll = currentValue;
      }
    }, 0)

    console.log('valor', this.amountAll);
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
