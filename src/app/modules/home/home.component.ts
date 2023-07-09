import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Product } from './home';
import { Key } from 'lucide-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Product[];

  constructor (private home_service: HomeService){}

  ngOnInit(): void {
    this.onGetProdutos();
  }

  onGetProdutos = () => {
    this.home_service.getProdutos().subscribe(res => {
      console.log('produtos', res);
      this.products = res;

      console.log(res);


     this.products.map(key => {
      console.log(key.categoria);
      
     })
      
      
    })
  }
}
