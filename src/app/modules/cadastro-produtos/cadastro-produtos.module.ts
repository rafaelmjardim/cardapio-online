import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutosRoutingModule } from './cadastro-produtos-routing.module';
import { CadastroProdutosComponent } from './cadastro-produtos.component';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CadastroProdutosComponent
  ],
  imports: [
    CommonModule,
    CadastroProdutosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CadastroProdutosModule { }
