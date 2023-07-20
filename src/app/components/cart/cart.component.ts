import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../products-cards/products-cards';
import { CartService } from './cart.service';
import { Order } from './cart';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItens: Product[] = [];

  newOrder!: Order;
  
  constructor (private cart_service: CartService){}
  ngOnInit(): void {
    this.cartItens = this.cart_service.cartItens;
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

  handleClearBag = () => {
    this.cartItens.length = 0
    this.cart_service.quantityCount = 0;
  }
}