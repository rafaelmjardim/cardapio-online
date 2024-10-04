import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LucideAngularModule, Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle, BaggageClaim, X, Minus, Plus, Info } from 'lucide-angular';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeModule } from './app/modules/home/home.module';
import { PromocoesModule } from './app/modules/promocoes/promocoes.module';
import { PedidosModule } from './app/modules/pedidos/pedidos.module';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideNgxMask, NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, PedidosModule, PromocoesModule, HomeModule, ReactiveFormsModule, FormsModule, LayoutModule, MatTabsModule, LucideAngularModule.pick({ Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle, BaggageClaim, X, Minus, Plus, Info }), NgxMaskDirective, NgxMaskPipe),
        provideNgxMask(),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
