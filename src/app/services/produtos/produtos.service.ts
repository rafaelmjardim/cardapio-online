import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/components/products-cards/products-cards';
import { environment } from 'src/environments/environments.prod';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos = (id_category?: number):Observable<any> => {    
    return this.http.get<any>(`${API_KEY}/produtos`, {
      params: new HttpParams().set('nome', '').set('id_categoria', id_category ? id_category : '' )
    });
  };

  getProduto = (product: Product) => {
    return this.http.get<any>(`${API_KEY}/produto`, {
      params: new HttpParams().set('codigo', product.codigo)
    })
  }
}
