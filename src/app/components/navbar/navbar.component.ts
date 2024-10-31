import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';
import { LoginComponent } from '../login/login.component';
import { UserService } from 'src/app/services/user/user.service';
import { MatMenu, MatMenuItem } from '@angular/material/menu';
import { LucideAngularModule } from 'lucide-angular';
import { NgIf, NgClass } from '@angular/common';
import { SharedModule } from 'src/app/pages/shared/shared.module';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [NgIf, RouterLink, NgClass, LucideAngularModule, MatMenu, MatMenuItem, SharedModule]
})
export class NavbarComponent implements OnInit {
  destroyRef = inject(DestroyRef);
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
  }

  checkUserLogged = () => {
    this.user.isLeggedSubjectStream$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(res => {
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
