import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';
import { LoginComponent } from '../login/login.component';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';
import { MatMenu, MatMenuItem } from '@angular/material/menu';
import { LucideAngularModule } from 'lucide-angular';
import { NgIf, NgClass } from '@angular/common';
import { SharedModule } from 'src/app/pages/shared/shared.module';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [NgIf, RouterLink, NgClass, LucideAngularModule, MatMenu, MatMenuItem, SharedModule]
})
export class NavbarComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  logout: boolean = false;

  isLogged!: boolean;

  constructor (
    public router: Router,
    public mobile_utils: MobileUtilsService, 
    public user: UserService,
    public dialog: MatDialog){}

  ngOnInit(): void {
    this.mobile_utils.onInitMediaMobile();
    this.checkUserLogged();
    // this.user.userGetItem();

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  checkUserLogged = () => {
    this.subscription = this.user.isLeggedSubjectStream$.subscribe(res => {
      this.isLogged = res;
    })
  }

  handleOpenLogin = () => {
    this.dialog.open(LoginComponent);
  }

  handleLogout = () => {
    localStorage.removeItem('user');
    this.user.updateIsLoggedSubject(false);
  }
}
