import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { NewProduct } from 'src/app/services/produtos/produtos';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snack_bar: MatSnackBar
  ) { }

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup = () => {
    this.productFormGroup = new FormGroup({
      nome: new FormControl(''),
      descricao: new FormControl(''),
      valor_venda: new FormControl(''),
      categoria: new FormControl(''),
      imagem: new FormControl(''),
    })
  }

  handleCreateProduto = () => {
    const newProduct: NewProduct = this.productFormGroup.value;    
    this.produtos_service.postProduct(newProduct).subscribe({
      next: (produtos_response) => {
        this.alertMessage('Cadastrado com sucesso!');
        this.initFormGroup();
      },error: (produtos_error: HttpErrorResponse) => {
        this.alertMessage('Erro ao cadastrar!');
      }
    })
  }
  
  alertMessage = (mensagem: string) => {
    this.snack_bar.open(mensagem, 'ok', {duration: 1000});
  }

}
