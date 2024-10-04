import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocoesRoutingModule } from './promocoes-routing.module';
import { PromocoesComponent } from './promocoes.component';


@NgModule({
    imports: [
        CommonModule,
        PromocoesRoutingModule,
        PromocoesComponent
    ]
})
export class PromocoesModule { }
