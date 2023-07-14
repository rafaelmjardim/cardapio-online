import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor (public router: Router, public mobile_utils: MobileUtilsService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.mobile_utils.onInitMediaScreen();
  }

  handleOpenLogin = () => {
    this.dialog.open(LoginComponent);
  }
}
