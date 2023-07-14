import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // user = new BehaviorSubject<User>({name: '', phone: ''})
  userData!: User;

  constructor() { }

  userGetItem = () => {
    if (localStorage.getItem('nome')) {
      this.userData= {
        name: localStorage.getItem('nome'),
        phone: localStorage.getItem('numero')
      }
    }
  }
}
