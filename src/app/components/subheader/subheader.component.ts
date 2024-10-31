import { AfterViewInit, ChangeDetectorRef, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';

import { MatDialog } from "@angular/material/dialog";
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { LoginComponent } from '../login/login.component';
import { UserService } from 'src/app/services/user/user.service';
import { Subscription } from 'rxjs';
import { NgIf, NgClass } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { SharedModule } from 'src/app/pages/shared/shared.module';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
    selector: 'app-subheader',
    templateUrl: './subheader.component.html',
    styleUrls: ['./subheader.component.scss'],
    standalone: true,
    imports: [LucideAngularModule, NgIf, RouterLink, NgClass, SharedModule]
})
export class SubheaderComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  isLogged!: boolean;

  constructor (
    private dialog: MatDialog,
    public router: Router, 
    public mobile_utils: MobileUtilsService, 
    public user: UserService,
  ){}

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
