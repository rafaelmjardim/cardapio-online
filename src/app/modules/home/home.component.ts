import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Product } from './home';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

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
