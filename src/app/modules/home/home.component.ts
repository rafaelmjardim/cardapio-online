import { Component, OnInit } from '@angular/core';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/components/products-cards/products-cards';
import { CartService } from 'src/app/components/cart/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  cartItens!: Product[]

  products!: Product[];
  filterValue!: number;
  selectForm!: FormGroup;

  constructor (
    public mobile_utils: MobileUtilsService, 
    public cart_service: CartService,
    private form_builder: FormBuilder,
    private dialog: MatDialog,
  ){}

  ngOnInit(): void {
    this.initForm();
    this.setCartItens();

    this.mobile_utils.onInitMediaMedium()
    this.mobile_utils.onInitMediaMobile()
  }
  
  initForm = () => {
    this.selectForm = this.form_builder.group({
      selectInput: ['']
    })
  }
  
  setCartItens = () => {
    this.cart_service.cartItensStram$.subscribe(cartItens => {
      this.cartItens = cartItens;

      console.log('home cartItens', this.cartItens);
      
    })
  }

  onChangeCategoryValue = () => {
    this.filterValue = this.selectForm.controls['selectInput'].value;
    
    if (this.selectForm.controls['selectInput'].value === '0'){
      this.filterValue = 0;
    }    
  }

  handleOpenDialogCart = () => {
    this.dialog.open(CartComponent, {
      width: '100%',
      maxWidth: '90vw'
    })
  }
}
