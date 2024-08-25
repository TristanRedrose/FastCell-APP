import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { InfoTabComponent } from '../../components/info-tab/info-tab.component';
import { WebInfoTabComponent } from '../../components/web-info-tab/web-info-tab.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent,
    FooterComponent,
    RouterOutlet,
    InfoTabComponent,
    WebInfoTabComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
