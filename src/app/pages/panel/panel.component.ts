import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { NewProduct } from 'src/app/services/produtos/produtos';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  productFormGroup!: FormGroup;

  constructor(
    private produtos_service: ProdutosService,
  ) { }

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup = () => {
    this.productFormGroup = new FormGroup({
      nome: new FormControl(''),
      descricao: new FormControl(''),
      valor: new FormControl(''),
      categoria: new FormControl(''),
    })
  }

  handleCreateProduto = () => {
    const newProduct: NewProduct = this.productFormGroup.value;    
    this.produtos_service.postProduct(newProduct).subscribe({
      next: (produtos_response) => {
        console.log('Cadastrado com sucesso', produtos_response);
      },error: (produtos_error: HttpErrorResponse) => {
        console.log('error', produtos_error);
      }
    })
  }

}
