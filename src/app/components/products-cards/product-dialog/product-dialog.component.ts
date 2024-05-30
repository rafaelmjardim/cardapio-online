import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { AdicionaisList, Product } from '../products-cards';
import { CartService } from '../../cart/cart.service';
import { ProductDialogService } from './product-dialog.service';
import { Adicional, CurrentProductData } from './product-dialog';
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
  currentAdicionais: Adicional[] = [];

  updateCurrentProduct: Product[] = [];
  adicionaisList: Adicional[] = [];

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
      // this.countAdicionalList = this.currentProduct.adicionais;
    } 
    
  }
  // onGetProduct = () => {
  //   this.produtos_service.getProduto(this.dialog_data.codigo).subscribe(res => {
  //     // this.currentProduct = res[0]; 
            
  //   })

  //   //Carrega os adicinais
  // }

  onGetAdicionais = () => {
    this.product_dialog_service.getAdicionais().subscribe(adicionais => {
      this.adicionaisList = adicionais;   
      this.adicionaisList.map(adicional => {
        adicional.quantidade = 0; //Inicializa zerado
      })         
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
      this.currentAdicionais = [...this.currentAdicionais, newAdicional];
    }    

  }
  
  //Função para adicionar item ao carrinho
  handleAddCart = (product: Product) => {        
    const newProductCart: Product = {...product,
      quantidade: this.countProduct, 
      adicionais: this.currentAdicionais
    }

    this.cart_service.updateCartItensSubject(newProductCart);
    this.dialog.closeAll()    
  }

  handleEditCart = () => {
    const index = this.dialog_data.indexProduct;
    const updateCartItens: Product[] = this.cart_service.returnCartItensStorge();   
    const currentEditProduct = updateCartItens[index];
    
    currentEditProduct.quantidade = this.countProduct;
    // currentEditProduct.adicionais = this.countAdicionalList;

    this.cart_service.updateCartItensSubject(currentEditProduct, updateCartItens);
    this.dialog.closeAll();
  }

  checkUrlApi = () => {
    this.API_URL = this.utils_service.returnUrlServer();
  }
}