import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.prod';
import { GET_PEDIDOS } from './pedidos';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/services/user/user';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  user: User = this.user_service.getUserStorge();

  constructor(public http: HttpClient, private user_service: UserService) {}

  getOrders = (): Observable<GET_PEDIDOS> => {
    return this.http.get<GET_PEDIDOS>(`${API_KEY}/usuarios/${this.user.phone}/pedidos.json`)
  }
}
