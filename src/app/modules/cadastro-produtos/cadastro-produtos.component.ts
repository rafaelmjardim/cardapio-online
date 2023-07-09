import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CadastroProdutosService } from './cadastro-produtos.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent implements OnInit {

  categoryForm!: FormGroup;
  
  productForm!: FormGroup;

  constructor (private form_builder: FormBuilder, private cadastro_produto_service: CadastroProdutosService){}

  ngOnInit(): void {
    this.onInitForm();
  }

  onInitForm = () => {
    this.productForm = this.form_builder.group({
      productNameInput: [''],
      productCategoryInput: [''],
      productDescriptionInput: [''],
    })
  }

  submitCategoryForm = () => {
    const productNameInput = this.productForm.controls['productNameInput'].value;
    const productCategoryInput = this.productForm.controls['productCategoryInput'].value;
    const productDescriptionInput = this.productForm.controls['productDescriptionInput'].value;

    if(productNameInput && productCategoryInput) {
      this.cadastro_produto_service.postProduct(productNameInput, productDescriptionInput, productCategoryInput).subscribe(res => {
        console.log('Cadastrado com sucesso!');
      })
    }else {
      return
    }   

    //reset de form
    this.productForm.controls['productNameInput'].setValue('')
    this.productForm.controls['productCategoryInput'].setValue('')
    this.productForm.controls['productDescriptionInput'].setValue('')
    
  }
}
