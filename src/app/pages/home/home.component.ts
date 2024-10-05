import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from 'src/app/components/products-cards/products-cards';
import { CartService } from 'src/app/components/cart/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HomeService } from './home.service';
import { MatBadge } from '@angular/material/badge';
import { CartComponent as CartComponent_1 } from '../../components/cart/cart.component';
import { ProductsCardsComponent } from '../../components/products-cards/products-cards.component';
import { NgIf } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { SharedModule } from '../shared/shared.module';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [LucideAngularModule, FormsModule, ReactiveFormsModule, NgIf, ProductsCardsComponent, CartComponent_1, MatBadge, SharedModule]
})
export class HomeComponent implements OnInit, OnDestroy{
  destroyRef = inject(DestroyRef);
  subscription = new Subscription();

  cartItens: Product[] = this.cart_service.storedCartItens ? JSON.parse(this.cart_service.storedCartItens) : [];
  countCart: number = 1;

  products!: Product[];
  filterValue!: number;
  selectForm!: FormGroup;

  produtosList!: any;

  constructor (
    public mobile_utils: MobileUtilsService, 
    public cart_service: CartService,
    private form_builder: FormBuilder,
    private dialog: MatDialog,
    private home_service: HomeService,
    private produtos_service: ProdutosService,
    private utils_service: UtilsService
  ){}

  ngOnInit(): void {
    this.initForm();
    // this.setCartItens();
    this.onGetProdutos();

    this.mobile_utils.onInitMediaMedium()
    this.mobile_utils.onInitMediaMobile()
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onGetProdutos = () => {
    this.produtos_service.getProdutos().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(produtos => {
      this.produtosList = this.utils_service.convertGetFirebase(produtos);
    })
  }

  initForm = () => {
    this.selectForm = this.form_builder.group({
      selectInput: ['']
    })
  }
  
  setCartItens = () => {
    this.subscription = this.cart_service.cartItensStram$.subscribe(cartItens => {
      this.cartItens = cartItens;
      
      this.quantityCalc();
    })
  }

  //Pega o array de quantidades e soma para adicionar a contagem do matBadge
  quantityCalc = () => {
    const arrayQuantity: number[] = this.cartItens.map(product => {
      return Number(product.quantidade);
    })
    
    this.countCart = arrayQuantity.reduce((soma, elemento) => {
      return soma + elemento;
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
