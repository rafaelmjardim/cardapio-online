import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { Product } from '../products-cards';
import { CartService } from '../../cart/cart.service';

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
    @Inject(MAT_DIALOG_DATA) private dialog_data: Product,
  ){}

  currentProduct!: Product;

  count: number = 1;

  ngOnInit(): void {
    this.onGetProduct();

    
  }
  
  onGetProduct = () => {
    this.produtos_service.getProduto(this.dialog_data).subscribe(res => {
      this.currentProduct = res[0];            
    })
  }

  //Função que realiza a contagem de produtos
  handleCountProducts = (option: string) => {
    if (option === 'plus') {
      this.count = ++ this.count ;
    }else {
      this.count = -- this.count
    }    
  }

  //Função para adicionar item ao carrinho
  handleAddCart = (currentProduct: Product,) => {
    const id_cliente = 7;
    const mesa = 10;

    

    this.cart_service.setCartItens(currentProduct.codigo, id_cliente, mesa);

  }
}
