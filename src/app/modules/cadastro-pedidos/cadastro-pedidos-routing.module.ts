import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPedidosComponent } from './cadastro-pedidos.component';

const routes: Routes = [{
  path: '',
  component: CadastroPedidosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroPedidosRoutingModule { }
