import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor (public dialog: MatDialog, private form_builder: FormBuilder, private user: UserService){}

  ngOnInit(): void {
    this.loginForm = this.form_builder.group({
      nameInput: [''],
      phoneInput: ['']
    })
  }

  submitLoginForm = () => {
    const nameInput = this.loginForm.controls['nameInput'].value;
    const phoneInput = this.loginForm.controls['phoneInput'].value;

    localStorage.setItem('nome', nameInput);
    localStorage.setItem('numero', phoneInput);

    this.user.userGetItem();
    this.dialog.closeAll();
  }
}