import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { HeroAboutComponent } from '../../components/hero-about/hero-about.component';
import { HeroServicesComponent } from '../../components/hero-services/hero-services.component';
import { HeroShopComponent } from '../../components/hero-shop/hero-shop.component';
import { MetaService } from '../../services/meta/meta.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroBannerComponent,
    HeroAboutComponent,
    HeroServicesComponent,
    HeroShopComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setMetaTags(
      'MobiTronic - Home',
      'MobiTronic - Your trusted partner for mobile phone repair services. We offer fast, reliable, and affordable solutions for all your mobile device needs.',
      'MobiTronic, mobile phone repair, fast service, reliable service, affordable repair'
    );

    this.metaService.setAuthor('MobiTronic');
  }
}

