import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PedidosComponent } from './modules/pedidos/pedidos.component';
import { CadastroProdutosComponent } from './modules/cadastro-produtos/cadastro-produtos.component';

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
    component: CadastroProdutosComponent,
    loadChildren: () => import('./modules/cadastro-produtos/cadastro-produtos-routing.module').then((m) => m.CadastroProdutosRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
