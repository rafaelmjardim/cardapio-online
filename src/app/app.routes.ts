import { Routes } from '@angular/router';
import { UserComponent } from './modules/user/user.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'promocoes',
    loadComponent: () => import('./modules/promocoes/promocoes.component').then(c => c.PromocoesComponent)
  },
  {
    path: 'pedidos',
    loadComponent: () => import('./modules/pedidos/pedidos.component').then(c => c.PedidosComponent)
  },
  {
    path: 'user',
    component: UserComponent,
  },
];