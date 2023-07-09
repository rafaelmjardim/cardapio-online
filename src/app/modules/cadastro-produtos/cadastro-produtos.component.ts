import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent implements OnInit {

  categoryForm!: FormGroup;

  constructor (private form_builder: FormBuilder){}

  ngOnInit(): void {
    this.onInitForm();
  }

  onInitForm = () => {
    this.categoryForm = this.form_builder.group({
      categoryNameInput: ['']
    })
  }
}
