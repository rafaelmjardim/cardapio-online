import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../products-cards/products-cards';
import { CartService } from './cart.service';
import { Order } from './cart';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  cartItens: Product[] = [];
  amountAll: number = 0;

  newOrder!: Order;

  @Input() amountValues: any = []; //Rever tipagem para essa variavel

  
  constructor (public cart_service: CartService, public dialog: MatDialog){}
  
  ngOnInit(): void {    
    this.onCartItensList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  onCartItensList = () => {
    this.subscription = this.cart_service.cartItensStram$.subscribe(cartItens => {
      this.cartItens = cartItens; 
      this.setAmountAll();
      
      if (this.cartItens.length) {
        this.saveCartItensLocalStorge(this.cartItens);
      }
    })
  }

  setAmountAll = () => {

    //Pega os valores de todos os produtos do carrinho e retorna num array (já verificando a quantidade)
    const productsCartValuesArray = this.cartItens.map(productCart => {
      return productCart.quantidade ? productCart.valor_venda * productCart.quantidade : productCart.valor_venda;
    })
    
    this.accumulatedValuesAmount(productsCartValuesArray);    
  } 

  accumulatedValuesAmount = (productsValues: number[]) => {
    this.amountAll = productsValues.reduce((acumulador, currentValue) => {
      return acumulador + currentValue;
    }, 0)
  }

  //Fimção que salva na local storge
  saveCartItensLocalStorge = (cartItens: Product[]) => {
    localStorage.setItem('cartItens', JSON.stringify(cartItens));
  }

  //Função que obtem os dados da local storge
  recoverCartItens = () => {
    const cartItensString = localStorage.getItem('cartItens');

    if (cartItensString) {
      this.cartItens = JSON.parse(cartItensString);
      console.log('teste', this.cartItens);
      
    }
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

   this.setAmountAll();
  }

  handleClearAllBag = () => {
    this.cartItens.length = 0;
    this.amountAll = 0;


    //Limpa local storge
    localStorage.removeItem('cartItens');
  }
}