import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [HeaderComponent, SubheaderComponent, RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = 'cardapio-online';

}
