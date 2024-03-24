import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PedidosComponent } from './modules/pedidos/pedidos.component';
import { PromocoesComponent } from './modules/promocoes/promocoes.component';
import { UserComponent } from './modules/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'promocoes',
    component: PromocoesComponent,
    loadChildren: () => import('./modules/promocoes/promocoes.module').then(m => m.PromocoesModule)
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
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
