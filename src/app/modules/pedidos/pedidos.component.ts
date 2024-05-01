import { Component, OnInit } from '@angular/core';
import { PedidosService } from './pedidos.service';
import { Pedido } from './pedidos';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  ordersList: Pedido[] = [];

  constructor (private pedidos_service: PedidosService) {}

  ngOnInit(): void {
    this.onGetOrders();
  }

  onGetOrders = () => {
    this.pedidos_service.getOrders().subscribe({
      next: (pedidos_response) => {
        this.ordersList = pedidos_response;
      }
    })
  }
}
