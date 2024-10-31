import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { PedidosService } from './pedidos.service';
import { Pedido } from './pedidos';
import { UserService } from 'src/app/services/user/user.service';
import { LucideAngularModule } from 'lucide-angular';
import { NgIf, NgFor, NgClass, NgStyle, CurrencyPipe, DatePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-pedidos',
    templateUrl: './pedidos.component.html',
    styleUrls: ['./pedidos.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, NgClass, LucideAngularModule, NgStyle, CurrencyPipe, DatePipe]
})
export class PedidosComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  ordersList: Pedido[] = [];

  isLogged!: boolean;

  constructor (
    private pedidos_service: PedidosService,
    private user_service: UserService
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
    })
  }

  onGetOrders = () => {
    this.pedidos_service.getOrders().subscribe({
      next: (pedidos_response) => {
        this.ordersList = pedidos_response;
      }
    })
  }
}
