import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from './home';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Product[];

  filter!: string;

  constructor (public mobile_utils: MobileUtilsService){}

  ngOnInit(): void {
    this.mobile_utils.onInitBreakpoint();    
  }
}
