import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environments";
import { Observable } from "rxjs";

const API_KEY = environment.API_KEY

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private http: HttpClient) { }

  getProdutos = (): Observable<any> => {
    return this.http.get<any>(`${API_KEY}`, {

    })
  }
}
