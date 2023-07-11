import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/home/home';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.scss']
})
export class ProductsCardsComponent implements OnInit{
  @Input() productsData!: Product[]; //Crirar tipagem global ou aqui no componente futuramente
  @Input() title!: string;
  @Input() idCategory!: number;

  @Input() admin: boolean = false;

  @Input() deleteProductFunction!: Function;

  constructor (private produtos_service: ProdutosService){}

  ngOnInit(): void {
    this.onGetProducts(this.idCategory);
  }

  onGetProducts = (id_categoria?: number) => {
    this.produtos_service.getProdutos(id_categoria).subscribe(res => {
      this.productsData = res;            
    })
  }

}
