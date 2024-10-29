import { Component, Input, OnInit, OnChanges, SimpleChanges, Inject, effect, inject, DestroyRef } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { cardList, Categoria } from './products-cards';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { LucideAngularModule } from 'lucide-angular';
import { NgFor, NgClass, NgIf, CurrencyPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NewProduct } from 'src/app/services/produtos/produtos';
import { HomeService } from 'src/app/pages/home/home.service';

@Component({
    selector: 'app-products-cards',
    templateUrl: './products-cards.component.html',
    styleUrls: ['./products-cards.component.scss'],
    standalone: true,
    imports: [NgFor, NgClass, NgIf, LucideAngularModule, CurrencyPipe]
})
export class ProductsCardsComponent implements OnInit {
  private products!: NewProduct[];
  protected productsCards!: cardList[];
  private destroyRef = inject(DestroyRef);

  private produtos_service = inject(ProdutosService);
  private dialog = inject(MatDialog);
  private utils_service = inject(UtilsService);
  protected home_service = inject(HomeService)

  ngOnInit(): void {
    this.onGetProdutos();
  }

  onGetProdutos = () => {
    this.produtos_service.getProdutos().subscribe(produtos => {
      this.products = this.utils_service.convertGetFirebase(produtos);    

      this.productsCards = [
        {
          label: 'Lanches',
          id_categoria: 1,
          products: this.filterProductCategory(this.products, 'Lanche')
        },
        {
          label: 'Porções',
          id_categoria: 2,
          products: this.filterProductCategory(this.products, 'Porções')
        },
        {
          label: 'Bebidas',
          id_categoria: 3,
          products: this.filterProductCategory(this.products, 'Bebida')
        },
      ];      
    });
  }

  filterProductCategory = (products: NewProduct[], categoria: string) => {
    return products.filter(product => product.categoria == categoria);
  }

  handleOpenProductDialog = (currentProduct: NewProduct) => {
    this.dialog.open(ProductDialogComponent, {
      panelClass: 'mobile-dialog',
      data: {currentProduct}
    })
  }
}