import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';

import { MatDialog } from "@angular/material/dialog";
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { LoginComponent } from '../login/login.component';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements AfterViewInit {


  constructor (
    public router: Router, 
    public mobile_utils: MobileUtilsService, 
    public user: UserService,
    private dialog: MatDialog
  ){}

  ngAfterViewInit(): void {
    this.mobile_utils.onInitMediaMobile();

    this.user.userGetItem();      
  }

  handleOpenInfoDialog = () => {
    this.dialog.open(InfoDialogComponent, {
      panelClass: 'mobile-dialog'
    })
  }

  handleOpenLoginDialog = () => {
    this.dialog.open(LoginComponent)
  }
}
