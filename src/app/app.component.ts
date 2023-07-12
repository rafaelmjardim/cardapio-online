import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { MobileUtilsService } from './services/mobile_utils/mobile-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'cardapio-online';

  constructor (public mobile_utils: MobileUtilsService, private changeDetectorRef: ChangeDetectorRef){

  }

  ngAfterViewInit(): void {
    this.mobile_utils.onInitBreakpoint();

    //Verificar pq precisa disso (adicionado para remover erro)
    this.changeDetectorRef.detectChanges();
  }
}
