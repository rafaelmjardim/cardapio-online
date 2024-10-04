import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-home-filters',
    templateUrl: './home-filters.component.html',
    styleUrls: ['./home-filters.component.scss'],
    standalone: true,
    imports: [LucideAngularModule, FormsModule, ReactiveFormsModule]
})
export class HomeFiltersComponent implements OnInit {

  selectForm!: FormGroup;

  @Output() categoryValue = new EventEmitter();

  constructor (private form_builder: FormBuilder){}
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
