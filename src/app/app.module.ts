import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Não apagar esses imports
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './modules/shared/shared.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { LucideAngularModule, Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle, BaggageClaim, X } from "lucide-angular";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CadastroProdutosModule } from './modules/cadastro-produtos/cadastro-produtos.module';
import { LayoutModule } from "@angular/cdk/layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoDialogComponent } from './components/subheader/info-dialog/info-dialog.component';

import { MatTabsModule } from '@angular/material/tabs';
import { ProductDialogComponent } from './components/products-cards/product-dialog/product-dialog.component';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CadastroProdutosModule,
    FormsModule,
    HomeModule,
    LayoutModule,
    MatTabsModule,
    LucideAngularModule.pick({Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle, BaggageClaim, X}),
    BrowserAnimationsModule
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
