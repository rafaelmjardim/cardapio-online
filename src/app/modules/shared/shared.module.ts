import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCardsComponent } from 'src/app/components/products-cards/products-cards.component';
import {LucideAngularModule, Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle} from "lucide-angular";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { CartComponent } from 'src/app/components/cart/cart.component';

import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    ProductsCardsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatBadgeModule,
    LucideAngularModule.pick({Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle})
  ],
  exports: [
    ProductsCardsComponent,
    CartComponent,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatBadgeModule,
  ]
})
export class SharedModule { }
