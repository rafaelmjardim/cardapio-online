import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Product } from './home';
import { environment } from 'src/environments/environments.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: any;

  URL_IMG: string = environment.API_KEY;
  barra: string = '/'

  constructor (private home_service: HomeService){}

  ngOnInit(): void {
    this.onGetProdutos();

    // this.products = [
    //   {
    //     title: 'Burguer Completo',
    //     description: 'Delicioso hambúrguer gourmet, com ingredientes frescos e suculentos como..',
    //     value: 24,
    //     img: 'https://storage.googleapis.com/prod-cardapio-web/uploads/item/image/57544/thumb_amirali-mirhashemian-dyMvDxO3nkE-unsplash.jpg'
    //   },
    // ]
  }

  onGetProdutos = () => {
    this.home_service.getProdutos().subscribe(res => {
      console.log('produtos', res);
      this.products = res;
      
    })
  }
}
