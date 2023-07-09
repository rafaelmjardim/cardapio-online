import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PedidosComponent } from './modules/pedidos/pedidos.component';
import { CadastroPedidosComponent } from './modules/cadastro-pedidos/cadastro-pedidos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
  },
  {
    path: 'cadastro-produtos',
    component: CadastroPedidosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
