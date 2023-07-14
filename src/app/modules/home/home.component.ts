import { Component, OnInit } from '@angular/core';
import { Product } from './home';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  products!: Product[];

  filter!: string;

  selectForm!: FormGroup;

  constructor (public mobile_utils: MobileUtilsService, private form_builder: FormBuilder){}

  ngOnInit(): void {
    this.selectForm = this.form_builder.group({
      selectInput: ['']
    })
  }
  
  onChangeCategoryValue = () => {
    const optionValue = this.selectForm.controls['selectInput'].value;
       
    console.log(optionValue);
  }
}
