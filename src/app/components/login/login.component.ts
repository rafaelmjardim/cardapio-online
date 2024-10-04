import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/services/user/user';
import { NgxMaskDirective } from 'ngx-mask';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [LucideAngularModule, FormsModule, ReactiveFormsModule, MatFormField, MatInput, MatLabel, NgxMaskDirective]
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