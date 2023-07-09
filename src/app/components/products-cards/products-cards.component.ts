import { Component, Input } from '@angular/core';
import { Product } from 'src/app/modules/home/home';

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.scss']
})
export class ProductsCardsComponent {
  @Input() productsData!: Product[]; //Crirar tipagem global ou aqui no componente futuramente
  @Input() title!: string;
  @Input() idCategory!: number;
}
