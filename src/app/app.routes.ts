import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'panel',
    loadComponent: () => import('./pages/panel/panel.component').then(c => c.PanelComponent)
  },
  {
    path: 'promocoes',
    loadComponent: () => import('./pages/promocoes/promocoes.component').then(c => c.PromocoesComponent)
  },
  {
    path: 'pedidos',
    loadComponent: () => import('./pages/pedidos/pedidos.component').then(c => c.PedidosComponent)
  },
  {
    path: 'user',
    loadComponent: () => import('./pages/user/user.component').then(c => c.UserComponent),
  },
];