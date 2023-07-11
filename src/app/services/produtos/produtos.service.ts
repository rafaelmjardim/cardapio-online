import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/home/home';
import { environment } from 'src/environments/environments.prod';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  postProduct = (productName: string, productDescription: string, productCategory: number, uploadImg: any) => {
    
    const formData = new FormData();

    formData.append('upload_imagem', uploadImg)

    formData.set('nome', productName)
    formData.set('descricao', productDescription)
    formData.set('id_categoria', String(productCategory))
    formData.set('status', String(1))

    return this.http.post(`${API_KEY}/produtos`, formData, {} as any);
  }

  getProdutos = ():Observable<any> => {
    return this.http.get<any>(`${API_KEY}/produtos`, {
      params: new HttpParams().set('nome', '')
    });
  };

  deleteProduto = (codigo: Product) => {
    return this.http.delete(`${API_KEY}/produtos`, {
      params: new HttpParams().set('codigo', codigo.codigo)
    })
  }
}