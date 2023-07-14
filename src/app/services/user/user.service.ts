import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // user = new BehaviorSubject<User>({name: '', phone: ''})


  constructor() { }
}
