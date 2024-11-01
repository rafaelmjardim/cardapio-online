import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {  
  isLoggedSubject = new BehaviorSubject<boolean>(localStorage.getItem('user') ? true : false);
  isLeggedSubjectStream$ = this.isLoggedSubject.asObservable();

  user!: User;
  
  constructor() { }

  updateIsLoggedSubject = (value: boolean) => {
    this.isLoggedSubject.next(value);
  }

  getUserStorge = () => {
    const userStorge = localStorage.getItem('user');
    return  userStorge ? JSON.parse(userStorge) : null;
  }

}
