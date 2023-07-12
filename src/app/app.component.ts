import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { MobileUtilsService } from './services/mobile_utils/mobile-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cardapio-online';

}
