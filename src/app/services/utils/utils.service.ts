import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments.prod';

const API_KEY = environment.API_KEY;
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  returnUrlServer = () => {
    return API_KEY + '/';
  }
}
