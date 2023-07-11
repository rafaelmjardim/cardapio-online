import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Product[];

  filter!: string;

  constructor (){}

  ngOnInit(): void {
        
  }
}
