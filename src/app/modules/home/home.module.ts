import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeFiltersComponent } from './home-filters/home-filters.component';

import {LucideAngularModule, Menu, Home, BadgePercent, ShoppingBag, User, Search} from "lucide-angular";
import { ProductsCardsComponent } from 'src/app/components/products-cards/products-cards.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeFiltersComponent,
    ProductsCardsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LucideAngularModule.pick({Menu, Home, BadgePercent, ShoppingBag, User, Search})
  ]
})
export class HomeModule { }
