import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments.prod';

const API_KEY = environment.API_KEY;
const API_KEY2 = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class CadastroProdutosService {

  constructor(private http: HttpClient) { }

  postProduct = (productName: string, productDescription: string, produCategory: number) => {
    return this.http.post(`${API_KEY}/produtos`, {
      nome: productName,
      descricao: productDescription,
      id_categoria: produCategory,
      status: 1
    })
  }
}
