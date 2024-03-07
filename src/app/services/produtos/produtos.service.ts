import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  postProduct = (productName: string, productDescription: string, productValue: number, productCategory: number, uploadImg: any) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5ODUyMDE2LCJleHAiOjE3MDk5Mzg0MTZ9.JGAuC0FAZBb_hPx_obz8CnocJPH5VmBIIIEI7hO1ppQ'
    const formData = new FormData();

    formData.append('upload_imagem', uploadImg)

    formData.set('nome', productName)
    formData.set('descricao', productDescription)
    formData.set('valor_venda', String(productValue))
    formData.set('id_categoria', String(productCategory))
    formData.set('status', String(1))
    
    //campos que precisam ser enviados mesmo em branco
    formData.set("codigo_interno", "");
    formData.set("id_adicional", "");
    formData.set("id_sabor", "");
    formData.set("valor_promo", "");
    formData.set("destaque", "");
    formData.set("observacao", "");
    formData.set("tamanho", "");

    return this.http.post(`${API_KEY}/produtos`, formData, {
      headers: new HttpHeaders({
        'x-access-token': token
      }),
    });
  }

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

  deleteProduto = (product: Product) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5NzY0NzQ1LCJleHAiOjE3MDk4NTExNDV9.9up1en8i9kzi6kW7D2SuWHvnun0itjH6K9v4h-_DG4I'

    return this.http.delete(`${API_KEY}/produtos`, {
      params: new HttpParams().set('codigo', product.codigo).set('nome_imagem_delete', product.imagem ? product.imagem : ''),
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
          'x-access-token': token
      })
    })
  }
}
