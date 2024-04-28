import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/services/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor (
    private form_builder: FormBuilder, 
    public user: UserService,
    public dialog: MatDialog, 
  ){}

  ngOnInit(): void {
    this.initForm();    
  }

  initForm = () => {
    this.loginForm = this.form_builder.group({
      nameInput: ['', Validators.required],
      phoneInput: ['', Validators.required]
    })
  }

  submitLoginForm = () => {
    const user: User = {
      name: this.loginForm.controls['nameInput'].value,
      phone:  this.loginForm.controls['phoneInput'].value
    }
    
    if (this.loginForm.invalid) {
      return
    }

    //Adiciona usuario na localStorge
    localStorage.setItem('user', JSON.stringify(user));
    this.dialog.closeAll();
    this.user.updateIsLoggedSubject(true);
  }
}