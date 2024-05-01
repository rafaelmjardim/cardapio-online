import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Não apagar esses imports
import { HomeModule } from './modules/home/home.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { LucideAngularModule, Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle, BaggageClaim, X, Minus, Plus, Info } from "lucide-angular";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoDialogComponent } from './components/subheader/info-dialog/info-dialog.component';

import { MatTabsModule } from '@angular/material/tabs';
import { ProductDialogComponent } from './components/products-cards/product-dialog/product-dialog.component';
import { ConfirmationDialogComponent } from './components/cart/confirmation-dialog/confirmation-dialog.component';
import { PedidosModule } from './modules/pedidos/pedidos.module';
import { PromocoesModule } from './modules/promocoes/promocoes.module';


import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SubheaderComponent,
    NavbarComponent,
    InfoDialogComponent,
    LoginComponent,
    ProductDialogComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PedidosModule,
    PromocoesModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatTabsModule,
    LucideAngularModule.pick({Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle, BaggageClaim, X, Minus, Plus, Info}),
    BrowserAnimationsModule
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
