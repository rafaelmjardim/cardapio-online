import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './modules/user/user.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'promocoes',
    loadChildren: () => import('./modules/promocoes/promocoes.module').then(m => m.PromocoesModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./modules/pedidos/pedidos-routing.module').then(m => m.PedidosRoutingModule)
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
