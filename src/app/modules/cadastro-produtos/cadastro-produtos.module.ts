import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutosRoutingModule } from './cadastro-produtos-routing.module';
import { CadastroProdutosComponent } from './cadastro-produtos.component';

import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CadastroProdutosComponent
  ],
  imports: [
    CommonModule,
    CadastroProdutosRoutingModule,
    ReactiveFormsModule
  ]
})
export class CadastroProdutosModule { }
