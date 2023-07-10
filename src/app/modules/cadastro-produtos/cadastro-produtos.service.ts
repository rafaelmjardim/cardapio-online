import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments.prod';


@Injectable({
  providedIn: 'root'
})
export class CadastroProdutosService {

  constructor(private http: HttpClient) { }

  
}