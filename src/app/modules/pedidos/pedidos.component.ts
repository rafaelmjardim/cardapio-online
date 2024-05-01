import { Component, OnInit } from '@angular/core';
import { PedidosService } from './pedidos.service';
import { Pedido } from './pedidos';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  subscription = new Subscription();

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
    this.subscription = this.user_service.isLeggedSubjectStream$.subscribe(res => {
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
