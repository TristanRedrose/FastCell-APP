import { Component } from '@angular/core';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { HeroAboutComponent } from '../../components/hero-about/hero-about.component';
import { MetaService } from '../../services/meta/meta.service';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutUsComponent,
    HeroAboutComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.setMetaTags(
      'MobiTronic - About us',
      'MobiTronic - Your trusted partner for mobile phone repair services. We offer fast, reliable, and affordable solutions for all your mobile device needs.',
      'MobiTronic, mobile phone repair, fast service, reliable service, affordable repair'
    );

    this.metaService.setAuthor('MobiTronic');
  }
}
