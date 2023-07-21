import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products-cards/products-cards';
import { CartService } from './cart.service';
import { Order } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItens: Product[] = [];

  newOrder!: Order;

  @Input() amountValues: any = []; //Rever tipagem para essa variavel

  
  constructor (public cart_service: CartService){}
  ngOnInit(): void {
    this.cartItens = this.cart_service.cartItens;
    // const getCartItens = (localStorage.getItem('cartItens'))    
    // this.cartItens = JSON.parse(String(getCartItens))
  }
  
  handleSubmitOrder = () => {
    const date = new Date();

    this.newOrder = {
      id_cliente: 1,
      lista_carrinho: this.cartItens,
      mesa: 2,
      form_pag: 1,
      data_venda: date,
      entrega: false,
      finalizado: false,
    }

    console.log('new',this.newOrder);
    
    this.cart_service.postPedido(this.newOrder).subscribe(res => {
      console.log('post realizado com sucesso');
      
    })
  }


  //função que converte valor para ficar com duas casas decimais
  decimalConvert = (value: number) => {
    return value.toFixed(2)
  }

  handleCleanCartIten = (index: number) => {
   this.cartItens.splice(index, 1)
   this.cart_service.quantityCount = index;
  }

  handleClearAllBag = () => {
    this.cartItens.length = 0
    this.cart_service.quantityCount = 0;
    this.cart_service.amountValuesArray = [0];
    this.cart_service.amountAll = 0;

    console.log(this.cart_service.amountAll);
    
  }
}