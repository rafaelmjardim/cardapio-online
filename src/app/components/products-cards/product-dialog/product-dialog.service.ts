import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments.prod';

const APY_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class ProductDialogService {

  constructor(private http: HttpClient) { }

  getAdicionais = () => {
    return this.http.get<any>(`${APY_KEY}/adicionais`, {
      
    })
  }


}
