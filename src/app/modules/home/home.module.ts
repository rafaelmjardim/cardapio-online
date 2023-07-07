import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SubheaderComponent } from 'src/app/components/subheader/subheader.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SubheaderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
