import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/components/products-cards/products-cards';
import { environment } from 'src/environments/environments.prod';
import { NewProduct } from './produtos';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos = (id_category?: number):Observable<any> => {    
    return this.http.get<any>(`${API_KEY}/produtos.json`, {
      // params: new HttpParams().set('nome', '').set('id_categoria', id_category ? id_category : '' )
    });
  };

  getProduto = (codigo: number) => {
    return this.http.get<any>(`${API_KEY}/produto.json`, {
      params: new HttpParams().set('codigo', codigo)
    })
  }

  postProduct = (newProduct: NewProduct) => {    
    return this.http.post(`${API_KEY}/produtos.json`, {
      nome: newProduct.nome,
      descricao: newProduct.descricao,
      valor_venda: newProduct.valor_venda,
      imagem: newProduct.imagem,
      categoria: newProduct.categoria
    });
  }
}
