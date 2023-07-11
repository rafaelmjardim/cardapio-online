import { Component, OnInit } from '@angular/core';
import { Product } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Product[];

  constructor (){}

  ngOnInit(): void {

  }
}
