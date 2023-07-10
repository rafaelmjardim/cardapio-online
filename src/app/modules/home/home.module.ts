import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeFiltersComponent } from './home-filters/home-filters.component';

import {LucideAngularModule, Menu, Home, BadgePercent, ShoppingBag, User, Search} from "lucide-angular";
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomeFiltersComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    LucideAngularModule.pick({Menu, Home, BadgePercent, ShoppingBag, User, Search})
  ],
  exports: [
    SharedModule
  ]
})
export class HomeModule { }
