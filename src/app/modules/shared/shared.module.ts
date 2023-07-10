import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCardsComponent } from 'src/app/components/products-cards/products-cards.component';
import {LucideAngularModule, Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle} from "lucide-angular";



@NgModule({
  declarations: [
    ProductsCardsComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle})
  ],
  exports: [
    ProductsCardsComponent,

  ]
})
export class SharedModule { }
