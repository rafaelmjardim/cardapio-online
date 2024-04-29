import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  ordersList: any[] = [];

  ngOnInit(): void {
    this.onGetOrders();
  }

  onGetOrders = () => {
    this.ordersList = [
      {
        name: 'Pedido 1'
      },
      {
        name: 'Pedido 2'
      },
    ]
  }
}
