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

  postProduct = (productName: string, productDescription: string, productValue: any, productCategory: number, uploadImg: any) => {
    
    const formData = new FormData();

    formData.append('upload_imagem', uploadImg)

    formData.set('nome', productName)
    formData.set('descricao', productDescription)
    formData.set('valor_venda', productValue)
    formData.set('id_categoria', String(productCategory))
    formData.set('status', String(1))

    return this.http.post(`${API_KEY}/produtos`, formData, {} as any);
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
    return this.http.delete(`${API_KEY}/produtos`, {
      params: new HttpParams().set('codigo', product.codigo).set('nome_imagem_delete', product.imagem ? product.imagem : '')
    })
  }
}
