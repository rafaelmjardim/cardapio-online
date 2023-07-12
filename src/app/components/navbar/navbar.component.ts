import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor (public router: Router, public mobile_utils: MobileUtilsService){}

  ngOnInit(): void {
    this.mobile_utils.onInitMediaScreen();
  }
}
