import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from 'src/app/components/products-cards/products-cards';
import { CartService } from 'src/app/components/cart/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { MatBadge } from '@angular/material/badge';
import { CartComponent as CartComponent_1 } from '../../components/cart/cart.component';
import { ProductsCardsComponent } from '../../components/products-cards/products-cards.component';
import { NgIf } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeService } from './home.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf, ProductsCardsComponent, CartComponent_1, MatBadge, SharedModule]
})
export class HomeComponent implements OnInit{
  destroyRef = inject(DestroyRef);

  cartItens: Product[] = this.cart_service.storedCartItens ? JSON.parse(this.cart_service.storedCartItens) : [];
  countCart: number = 1;

  products!: Product[];
  selectCetegoria: number = 0;
  selectForm!: FormGroup;

  produtosList!: any;

  showSearchIcon: boolean = true;

  constructor (
    public mobile_utils: MobileUtilsService, 
    public cart_service: CartService,
    private form_builder: FormBuilder,
    private dialog: MatDialog,
    private home_service: HomeService
  ){}

  ngOnInit(): void {
    this.initForm();
    this.checkCartItens();
    this.mobile_utils.onInitMediaMedium()
    this.mobile_utils.onInitMediaMobile()
  }

  initForm = () => {
    this.selectForm = this.form_builder.group({
      selectInput: ['']
    })
  }
  
  checkCartItens = () => {
    this.cart_service.cartItensStram$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(cartItens => {
      this.cartItens = cartItens;      
      if (cartItens?.length) {
        this.quantityCalc();
      }
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
    this.selectCetegoria = this.selectForm.controls['selectInput'].value;
    
    if (this.selectForm.controls['selectInput'].value === 0){
      this.selectCetegoria = 0;
    }
    
    this.home_service.currentCategoria.set(this.selectCetegoria);
  }

  searchProduct = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.showSearchIcon = target.value.length ? false : true;

    console.log('Event input', target.value);
    
  }

  handleOpenDialogCart = () => {
    this.dialog.open(CartComponent, {
      width: '100%',
      maxWidth: '90vw'
    })
  }
}
