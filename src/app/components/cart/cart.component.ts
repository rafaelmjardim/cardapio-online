import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../products-cards/products-cards';
import { CartService } from './cart.service';
import { Pedido } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {

  cartItens: Product[] = [];

  order!: any;

  newOrder!: Pedido;

  itens: number[] = []

  constructor (private cart_service: CartService){}
  ngOnInit(): void {
    this.cartItens = this.cart_service.cartItens;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.cartItens = this.cart_service.cartItens;
    
  }

  handleSubmitOrder = () => {
    this.cartItens.map(item => {  
      this.itens.push(item.codigo)
      
    })
    
    this.newOrder = {
      id_cliente: 1,
      lista_carrinho: [
        {id_produto: this.itens}
      ],
      mesa: 2
    }

    this.cart_service.postPedido(this.newOrder).subscribe(res => {
      console.log('post realizado com sucesso');
      
    })
  }

  handleClearBag = () => {
    this.cartItens = []
  }
}