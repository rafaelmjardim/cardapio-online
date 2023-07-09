import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroPedidosRoutingModule } from './cadastro-pedidos-routing.module';
import { CadastroPedidosComponent } from './cadastro-pedidos.component';


@NgModule({
  declarations: [
    CadastroPedidosComponent
  ],
  imports: [
    CommonModule,
    CadastroPedidosRoutingModule
  ]
})
export class CadastroPedidosModule { }
