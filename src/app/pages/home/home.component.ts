import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { HeroAboutComponent } from '../../components/hero-about/hero-about.component';
import { HeroServicesComponent } from '../../components/hero-services/hero-services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,
    FooterComponent,
    HeroBannerComponent,
    HeroAboutComponent,
    HeroServicesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
