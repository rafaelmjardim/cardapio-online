import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.prod';
import { GET_PEDIDOS } from './pedidos';

const API_KEY = environment.JSON_SERVER;

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(public http: HttpClient) { }

  getOrders = (): Observable<GET_PEDIDOS> => {
    return this.http.get<GET_PEDIDOS>(`${API_KEY}/pedidos`)
  }
}
