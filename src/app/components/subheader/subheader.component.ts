import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';

import { MatDialog } from "@angular/material/dialog";
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { LoginComponent } from '../login/login.component';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements AfterViewInit, OnDestroy {
  subscription = new Subscription();
  isLogged!: boolean;

  constructor (
    private dialog: MatDialog,
    public router: Router, 
    public mobile_utils: MobileUtilsService, 
    public user: UserService,
  ){}

  ngAfterViewInit(): void {
    this.mobile_utils.onInitMediaMobile();
    this.checkUserLogged();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();    
  }

  checkUserLogged = () => {
    this.subscription = this.user.isLeggedSubjectStream$.subscribe(res => {
      this.isLogged = res;
    })
  }

  handleOpenInfoDialog = () => {
    this.dialog.open(InfoDialogComponent, {
      panelClass: 'mobile-dialog'
    })
  }

  handleOpenLoginDialog = () => {
    this.dialog.open(LoginComponent)
  }

  handleLogout = () => {
    localStorage.removeItem('user');
    this.user.updateIsLoggedSubject(false);
  }
}
