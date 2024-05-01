import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../products-cards/products-cards';
import { CartService } from './cart.service';
import { Order } from './cart';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { ProductDialogComponent } from '../products-cards/product-dialog/product-dialog.component';
import { UserService } from 'src/app/services/user/user.service';
import { LoginComponent } from '../login/login.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  
  @Input() amountValues: any = []; //Rever tipagem para essa variavel

  cartItens: Product[] = [];
  amountAll: number = 0;
  newOrder!: Order;

  API_URL!: string;

  isLogged!: boolean;
  
  constructor (
    private user: UserService,
    private utils_service: UtilsService,
    public cart_service: CartService,
    public dialog: MatDialog
  ){}
  
  ngOnInit(): void {    
    this.onCartItensList();
    this.checkUrlApi();    
    this.checkUserLogged();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  checkUserLogged = () => {
    this.subscription = this.user.isLeggedSubjectStream$.subscribe(res => {
      this.isLogged = res;
    })
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

  //função que converte valor para ficar com duas casas decimais
  decimalConvert = (value: number) => {
    return value.toFixed(2)
  }

  handleCleanCartIten = (index: number) => {
   this.cartItens.splice(index, 1)

   this.saveCartItensLocalStorge(this.cartItens);
   this.setAmountAll();
  }

  handleClearAllBag = () => {
    this.cartItens.length = 0;
    this.amountAll = 0;

    //Limpa local storge
    localStorage.removeItem('cartItens');
  }

  checkUrlApi = () => {
    this.API_URL = this.utils_service.returnUrlServer();
  }

  handleOpenProduct = (currentProduct: Product, indexProduct: number) => {     
    
    this.dialog.open(ProductDialogComponent, {
      panelClass: 'mobile-dialog',
      data: {currentProduct, isEdit: true, indexProduct}
    })
  }

  handleSubmitOrder = () => {
    const date = new Date();

    const valorTotal = this.amountAll;

    console.log('valor total', this.amountAll);
    

    this.newOrder = {
      id_cliente: 1,
      lista_carrinho: this.cartItens,
      mesa: 2,
      form_pag: 1,
      data_venda: date,
      entrega: false,
      finalizado: false,
    }
   
    if (!this.isLogged) {
      this.dialog.open(LoginComponent);
      return
    } 
    
    // this.cart_service.postPedido(this.newOrder).subscribe({
    //   next: (pedido_response) => {
    //     console.log('post realizado com sucesso');
    //     this.dialog.open(ConfirmationDialogComponent);
    //     this.handleClearAllBag();
    //   }
    // })
  }
}