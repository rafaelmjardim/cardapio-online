import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCardsComponent } from 'src/app/components/products-cards/products-cards.component';
import {LucideAngularModule, Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle} from "lucide-angular";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
  declarations: [
    ProductsCardsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    LucideAngularModule.pick({Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle})
  ],
  exports: [
    ProductsCardsComponent,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
  ]
})
export class SharedModule { }
