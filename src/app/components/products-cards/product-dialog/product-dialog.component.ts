import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { Product } from '../products-cards';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit{
  constructor (
    public dialog: MatDialog,
    private produtos_service: ProdutosService, 
    @Inject(MAT_DIALOG_DATA) private dialog_data: Product,
  ){}

  currentProduct!: Product;

  ngOnInit(): void {
    this.onGetProduct();
  }

  onGetProduct = () => {
    this.produtos_service.getProduto(this.dialog_data).subscribe(res => {
      this.currentProduct = res[0];      
    })
  }
}
