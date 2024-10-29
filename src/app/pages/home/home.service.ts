import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environments.prod';

const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  currentCategoria = signal<number>(0);
  
}
