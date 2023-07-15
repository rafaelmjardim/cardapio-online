import { Component, Input, OnInit, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { Product } from './products-cards';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.scss']
})
export class ProductsCardsComponent implements OnInit, OnChanges{
  @Input() productsData!: Product[]; //Crirar tipagem global ou aqui no componente futuramente
  @Input() title!: string;
  @Input() idCategory!: number;

  @Input() admin: boolean = false;

  @Input() deleteProductFunction!: Function;

  constructor (
    private produtos_service: ProdutosService, 
    private dialog: MatDialog, 
  ){}

  ngOnInit(): void {

  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.onGetProducts(this.idCategory);    
  }

  onGetProducts = (id_categoria?: number) => {
    this.produtos_service.getProdutos(id_categoria).subscribe(res => {
      this.productsData = res;            
    })
  }

  handleOpenProductDialog = (currentProduct: Product) => {
    this.dialog.open(ProductDialogComponent, {
      panelClass: 'mobile-dialog',
      data: currentProduct
    })
  }
}
