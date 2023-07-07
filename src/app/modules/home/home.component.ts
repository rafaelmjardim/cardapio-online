import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos!: any;

  constructor (private home_service: HomeService){}

  ngOnInit(): void {
    this.onGetProdutos();
  }

  onGetProdutos = () => {
    this.home_service.getProdutos().subscribe(res => {
      console.log('get', res);
      this.produtos = res;
      
    })
  }
}
