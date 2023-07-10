import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import {LucideAngularModule, Menu, Home, BadgePercent, ShoppingBag, User, Search} from "lucide-angular";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CadastroProdutosModule } from './modules/cadastro-produtos/cadastro-produtos.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SubheaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,    
    LucideAngularModule.pick({Menu, Home, BadgePercent, ShoppingBag, User, Search})
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
