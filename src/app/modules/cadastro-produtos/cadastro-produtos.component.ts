import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent {

  categoryForm!: FormGroup;

}
