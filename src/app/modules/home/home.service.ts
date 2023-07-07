import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments.prod';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getProdutos = () => {
    return this.http.get(`${API_KEY}`, {

    });
  };
}
