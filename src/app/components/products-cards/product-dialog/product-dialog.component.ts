import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { AdicionaisList, Product } from '../products-cards';
import { CartService } from '../../cart/cart.service';
import { ProductDialogService } from './product-dialog.service';
import { Adicinal, CurrentProductData } from './product-dialog';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit{
  currentProduct!: Product;
  
  //Contador de quantidade do produto
  countProduct: number = 1;

  //Contador de quantidade do Adicional
  countAdicionalList: AdicionaisList = {} as AdicionaisList;
  countAdicional: number = 0;

  updateCurrentProduct: Product[] = [];
  adicionaisList: Adicinal[] = [];

  API_URL!: string;
  isEdit = this.dialog_data.isEdit;
  
  constructor (
    public dialog: MatDialog,
    private produtos_service: ProdutosService, 
    private cart_service: CartService,
    private product_dialog_service: ProductDialogService,
    private utils_service: UtilsService,
    @Inject(MAT_DIALOG_DATA) private dialog_data: CurrentProductData,
  ){}

  ngOnInit(): void {
    this.currentProduct = this.dialog_data.currentProduct;
    // this.onGetProduct();
    this.onGetAdicionais();
    this.checkUrlApi(); 
    this.checkAdicinaisList();
    
    
    this.currentProduct = this.dialog_data.currentProduct;

    this.currentProduct = this.dialog_data.currentProduct;
    this.countProduct = this.dialog_data.currentProduct.quantidade ?? 1;

  }
  
  checkAdicinaisList = () => {
    if (this.currentProduct.adicionais && this.dialog_data.isEdit) {
      this.countAdicionalList = this.currentProduct.adicionais;
    } 
    
  }
  // onGetProduct = () => {
  //   this.produtos_service.getProduto(this.dialog_data.codigo).subscribe(res => {
  //     // this.currentProduct = res[0]; 
            
  //   })

  //   //Carrega os adicinais
  // }

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
      console.log('count', this.countAdicionalList[adicional.codigo]);
    }
    
    if (option === 'minus' && this.countAdicionalList[adicional.codigo]) {
      this.countAdicionalList[adicional.codigo]--
    }

    
    
  }
  
  //Função para adicionar item ao carrinho
  handleAddCart = (product: Product) => {    
    const newProductCart: Product = {...product,
      quantidade: this.countProduct, 
      adicionais: this.countAdicionalList
    }

    this.cart_service.updateCartItensSubject(newProductCart);
    this.dialog.closeAll()    
  }

  handleEditCart = () => {
    const index = this.dialog_data.indexProduct;
    const updateCartItens: Product[] = this.cart_service.returnCartItensStorge();   
    const currentEditProduct = updateCartItens[index];
    
    currentEditProduct.quantidade = this.countProduct;
    currentEditProduct.adicionais = this.countAdicionalList;

    this.cart_service.updateCartItensSubject(currentEditProduct, updateCartItens);
    this.dialog.closeAll();
  }

  checkUrlApi = () => {
    this.API_URL = this.utils_service.returnUrlServer();
  }
}