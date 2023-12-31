import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { AdicionaisList, Product } from '../products-cards';
import { CartService } from '../../cart/cart.service';
import { ProductDialogService } from './product-dialog.service';
import { Adicinal } from './product-dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit{
  constructor (
    public dialog: MatDialog,
    private produtos_service: ProdutosService, 
    private cart_service: CartService,
    private product_dialog_service: ProductDialogService,
    @Inject(MAT_DIALOG_DATA) private dialog_data: Product,
  ){}

  currentProduct!: Product;

  //Contador de quantidade do produto
  countProduct: number = 1;

  //Contador de quantidade do Adicional
  countAdicionalList: AdicionaisList = {};

  updateCurrentProduct: Product[] = [];

  adicionaisList: Adicinal[] = [];

  ngOnInit(): void {
    this.onGetProduct();
  }
  
  onGetProduct = () => {
    this.produtos_service.getProduto(this.dialog_data).subscribe(res => {
      this.currentProduct = res[0];            
    })

    //Carrega os adicinais
    this.onGetAdicionais();
  }

  onGetAdicionais = () => {
    this.product_dialog_service.getAdicionais().subscribe(res => {
      this.adicionaisList = res;            
    })
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
  handleCountAdicional = (option: string, adicional: Adicinal) => {
    if (option === 'plus' && this.countAdicionalList[adicional.codigo]) {
      this.countAdicionalList[adicional.codigo]++
    }else {
      this.countAdicionalList[adicional.codigo] = 1
    } 
    
    if (option === 'minus' && this.countAdicionalList[adicional.codigo]) {
      this.countAdicionalList[adicional.codigo]--
    }
  }
  
  //Função para adicionar item ao carrinho
  handleAddCart = (currentProduct: Product,) => {    
    this.cart_service.setCartItens(currentProduct, this.countProduct, currentProduct.valor_venda, this.countAdicionalList);
    this.dialog.closeAll()    
  }
}
