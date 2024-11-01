import { async } from '@angular/core/testing';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { PedidosService } from './pedidos.service';
import { Pedido } from './pedidos';
import { UserService } from 'src/app/services/user/user.service';
import { LucideAngularModule } from 'lucide-angular';
import { NgIf, NgFor, NgClass, NgStyle, CurrencyPipe, DatePipe, CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { SharedModule } from '../shared/shared.module';
import { MatTooltip } from "@angular/material/tooltip";
import { User } from 'src/app/services/user/user';

@Component({
    selector: 'app-pedidos',
    templateUrl: './pedidos.component.html',
    styleUrls: ['./pedidos.component.scss'],
    standalone: true,
    imports: [SharedModule, NgIf, NgFor, NgClass, NgStyle, MatTooltip, CurrencyPipe, DatePipe]
})
export class PedidosComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  ordersList: Pedido[] = [];

  isLogged!: boolean;

  constructor (
    private pedidos_service: PedidosService,
    private user_service: UserService,
    private utils_service: UtilsService
  ) {}

  ngOnInit(): void {
    this.onGetOrders();
    this.checkUserLogged();    
  }

  checkUserLogged = () => {
    this.user_service.isLeggedSubjectStream$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(res => {
      this.isLogged = res;      
      this.pedidos_service.user = this.user_service.getUserStorge();      
      this.onGetOrders();
    })
  }

  onGetOrders = ()  => {
    if (this.pedidos_service.user) {
      this.pedidos_service.getOrders().subscribe({
        next: (pedidos_response) => {
          this.ordersList = this.utils_service.convertGetFirebase(pedidos_response);          
        }
      })
    }
  }
}
