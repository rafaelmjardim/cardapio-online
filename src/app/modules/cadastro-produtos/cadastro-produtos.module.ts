import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroProdutosRoutingModule } from './cadastro-produtos-routing.module';
import { CadastroProdutosComponent } from './cadastro-produtos.component';


@NgModule({
  declarations: [
    CadastroProdutosComponent
  ],
  imports: [
    CommonModule,
    CadastroProdutosRoutingModule
  ]
})
export class CadastroProdutosModule { }
