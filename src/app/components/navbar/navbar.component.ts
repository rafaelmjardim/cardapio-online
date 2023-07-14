import { Component, OnInit, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';
import { LoginComponent } from '../login/login.component';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  logout: boolean = false;

  constructor (
    public router: Router,
    public mobile_utils: MobileUtilsService, 
    public user: UserService,
    public dialog: MatDialog){}

  ngOnInit(): void {
    this.mobile_utils.onInitMediaScreen();
    this.user.userGetItem();

  }
  
  ngOnChanges(): void {

  }

  handleOpenLogin = () => {
    this.dialog.open(LoginComponent);
  }

  handleLogout = () => {
    localStorage.clear();
    this.user.userGetItem();
  }
}
