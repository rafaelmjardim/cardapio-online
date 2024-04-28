import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {  
  isLoggedSubject = new BehaviorSubject<boolean>(localStorage.getItem('user') ? true : false)
  isLeggedSubjectStream$ = this.isLoggedSubject.asObservable();

  constructor() { }

  updateIsLoggedSubject = (value: boolean) => {
    this.isLoggedSubject.next(value);
  }
}
