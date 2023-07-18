import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PedidosComponent } from './modules/pedidos/pedidos.component';
import { CadastroProdutosComponent } from './modules/cadastro-produtos/cadastro-produtos.component';
import { PromocoesComponent } from './modules/promocoes/promocoes.component';
import { UserComponent } from './modules/user/user.component';
import { CartComponent } from './components/cart/cart.component';

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
    path: 'promocoes',
    component: PromocoesComponent,
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
  {
    path: 'user',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
