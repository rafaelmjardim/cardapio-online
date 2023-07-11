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

  constructor (private produtos_service: ProdutosService){}

  ngOnInit(): void {
    this.onGetProdutos();
  }

  onGetProdutos = () => {
    this.produtos_service.getProdutos().subscribe(res => {
      this.products = res;      
      console.log(res);
      
    })
  }
}
