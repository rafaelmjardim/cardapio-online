import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutosRoutingModule } from './cadastro-produtos-routing.module';
import { CadastroProdutosComponent } from './cadastro-produtos.component';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ProductsCardsComponent } from 'src/app/components/products-cards/products-cards.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CadastroProdutosComponent,
  ],
  imports: [
    CommonModule,
    CadastroProdutosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class CadastroProdutosModule { }
