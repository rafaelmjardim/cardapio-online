import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { Product } from '../products-cards';
import { CartService } from '../../cart/cart.service';
import { ProductDialogService } from './product-dialog.service';
import { Adicional, CurrentProductData } from './product-dialog';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { LucideAngularModule } from 'lucide-angular';
import { NgIf, NgFor, NgClass, CurrencyPipe, NgStyle } from '@angular/common';

@Component({
    selector: 'app-product-dialog',
    templateUrl: './product-dialog.component.html',
    styleUrls: ['./product-dialog.component.scss'],
    standalone: true,
    imports: [NgIf, LucideAngularModule, NgFor, NgClass, NgStyle, CurrencyPipe]
})
export class ProductDialogComponent implements OnInit{
  currentProduct!: Product;
  
  //Contador de quantidade do produto
  countProduct: number = 1;

  currentAdicionais: Adicional[] = [];

  updateCurrentProduct: Product[] = [];
  adicionaisList: Adicional[] = [];

  isEdit = this.dialog_data.isEdit;
  
  constructor (
    public dialog: MatDialog,
    private cart_service: CartService,
    @Inject(MAT_DIALOG_DATA) private dialog_data: CurrentProductData,
  ){}

  ngOnInit(): void {
    this.setCurrentProduct();
    this.onGetAdicionais();
  }

  setCurrentProduct = () => {
    this.currentProduct = this.dialog_data.currentProduct;
    this.countProduct = this.dialog_data.currentProduct.quantidade ?? 1;    
  }
  
  onGetAdicionais = () => {
    // Adicionais fixos (temporario)
    this.adicionaisList = [
      {
        codigo: 1,
        nome: 'Bacon',
        quantidade: 0,
        valor_venda: 2.00
      },
      {
        codigo: 2,
        nome: 'Queijo',
        quantidade: 0,
        valor_venda: 2.00
      },
      {
        codigo: 3,
        nome: 'Mostarda',
        quantidade: 0,
        valor_venda: 2.00
      },
      {
        codigo: 4,
        nome: 'Carne',
        quantidade: 0,
        valor_venda: 2.00
      },
    ]
  }

  //Função que realiza a contagem de produtos
  handleCountProducts = (option: string) => {
    if (option === 'plus') {
      this.countProduct = ++ this.countProduct ;
    }else {
      this.countProduct = -- this.countProduct
    }    
  }

  //Função que realiza a contagem de produtos
  handleCountAdicional = (option: string, adicional: Adicional) => {       
    if (option === 'plus') {      
      adicional.quantidade ++;
    }

    if (option === 'minus' && adicional.quantidade > 0) {
      adicional.quantidade --;      
    }        

    //Checa quais adicinais foram preenchidos para armazenar a valor na variavel
    this.checkAddAdicional(adicional);    

  }

  checkAddAdicional = (newAdicional: Adicional) => {    
    //Pega index do adicional para verificar se ja existe no array
    const index = this.currentAdicionais.findIndex(adicional => adicional.codigo === newAdicional.codigo)

    if (index !== -1) {
      //Caso o adicional ja foi adicionado verifica e edita apenas quantidade
      this.currentAdicionais[index] = {...this.currentAdicionais[index], ...newAdicional}
      
    } else {
      //Adiciona novo adicilnal
      this.currentAdicionais = [...this.currentAdicionais];
    }    
  }
  
  //Função para adicionar item ao carrinho
  handleAddCart = (product: Product) => {        
    const newProductCart: Product = {...product,
      quantidade: this.countProduct, 
      adicionais: [...this.adicionaisList, ...this.currentAdicionais]
    }    

    this.cart_service.updateCartItensSubject(newProductCart);
    this.dialog.closeAll()    
  }

  handleEditCart = () => {
    const index = this.dialog_data.indexProduct;
    const updateCartItens: Product[] = this.cart_service.returnCartItensStorge();   
    const currentEditProduct = updateCartItens[index];
    
    currentEditProduct.quantidade = this.countProduct;
    currentEditProduct.adicionais = this.adicionaisList;

    this.cart_service.updateCartItensSubject(currentEditProduct, updateCartItens);
    this.dialog.closeAll();
  }
}