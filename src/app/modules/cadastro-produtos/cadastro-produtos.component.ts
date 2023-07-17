import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Product } from 'src/app/components/products-cards/products-cards';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent implements OnInit {
  productsData!: Product[];

  categoryForm!: FormGroup;
  productForm!: FormGroup;

  uploadImg!: any;


  constructor (private form_builder: FormBuilder, private produtos_service: ProdutosService){}

  ngOnInit(): void {
    this.onInitForm();

    this.onGetProductList();
  
  }

  //Get de produtos(com crud)
  onGetProductList = () => {
    this.produtos_service.getProdutos().subscribe(res => {
      this.productsData = res;      
    })
  }

  //Carrega o formulario (dados iniciais)
  onInitForm = () => {
    this.productForm = this.form_builder.group({
      productNameInput: [''],
      productCategoryInput: [''],
      productDescriptionInput: [''],
      productValueInput: [''],
      productFileInput: ['']
    })
  }

  //Faz o post para a API
  submitProductForm = () => {
    const productNameInput = this.productForm.controls['productNameInput'].value;
    const productCategoryInput = this.productForm.controls['productCategoryInput'].value;
    const productDescriptionInput = this.productForm.controls['productDescriptionInput'].value;
    const productValueInput = this.productForm.controls['productValueInput'].value;

    if(productNameInput && productCategoryInput) {
      this.produtos_service.postProduct(productNameInput, productDescriptionInput, productValueInput, productCategoryInput, this.uploadImg).subscribe(res => {
        console.log('Cadastrado com sucesso!');
        this.onGetProductList();
      })
    }else {
      return
    }   


    //reset de form
    this.productForm.controls['productNameInput'].setValue('')
    this.productForm.controls['productCategoryInput'].setValue('')
    this.productForm.controls['productDescriptionInput'].setValue('')
    this.productForm.controls['productValueInput'].setValue('')
    this.productForm.controls['productFileInput'].setValue('')
    
  }

  //Seleciona a img para fazer post
  changeUploadFile = (event: any) => {
    const target = event.target;

    this.uploadImg = target.files[0];    
  }

  handleDeleteProduct = (product: Product) => {
    
    this.produtos_service.deleteProduto(product).subscribe(res => {
      console.log(`Produto ${product.codigo} deletado`);
      this.onGetProductList();
    })
  }
}
