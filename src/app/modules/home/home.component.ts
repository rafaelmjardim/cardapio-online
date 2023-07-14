import { Component, OnInit } from '@angular/core';
import { MobileUtilsService } from 'src/app/services/mobile_utils/mobile-utils.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/components/products-cards/products-cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  products!: Product[];

  filterValue!: number;

  selectForm!: FormGroup;

  constructor (public mobile_utils: MobileUtilsService, private form_builder: FormBuilder){}

  ngOnInit(): void {
    this.selectForm = this.form_builder.group({
      selectInput: ['']
    })
  }
  
  onChangeCategoryValue = () => {
    this.filterValue = this.selectForm.controls['selectInput'].value;
    
    if (this.selectForm.controls['selectInput'].value === '0'){
      this.filterValue = 0;
    }    
  }
}
