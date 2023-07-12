import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MobileUtilsService } from './services/mobile_utils/mobile-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'cardapio-online';

  resolutionMobile: boolean = false;

  constructor (private mobile_utils: MobileUtilsService, private changeDetectorRef: ChangeDetectorRef){

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.mobile_utils.mobileResolution.subscribe(res => {
      this.resolutionMobile = res;
      console.log(res);

      //Verificar pq precisa disso (adicionado para remover erro)
      this.changeDetectorRef.detectChanges();
      
    })
  }
}
