import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeFiltersComponent } from './home-filters/home-filters.component';

import {LucideAngularModule, Menu, Home, BadgePercent, ShoppingBag, User, Search} from "lucide-angular";
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  declarations: [
    HomeComponent,
    HomeFiltersComponent,
    InfoDialogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    LucideAngularModule.pick({Menu, Home, BadgePercent, ShoppingBag, User, Search})
  ],
  exports: [
    SharedModule
  ]
})
export class HomeModule { }
