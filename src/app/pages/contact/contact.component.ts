import { Component } from '@angular/core';
import { ContactBannerComponent } from '../../components/contact-banner/contact-banner.component';
import { ContactInfoComponent } from '../../components/contact-info/contact-info.component';
import { SlideInPopupComponent } from '../../components/popup/slide-in-popup/slide-in-popup.component';
import { MetaService } from '../../services/meta/meta.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ContactBannerComponent,
    ContactInfoComponent,
    SlideInPopupComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  constructor(private metaService: MetaService) {}
  
  ngOnInit(): void {
    this.metaService.setMetaTags(
      'MobiTronic - Contact',
      'MobiTronic - Your trusted partner for mobile phone repair services. We offer fast, reliable, and affordable solutions for all your mobile device needs.',
      'MobiTronic, mobile phone repair, fast service, reliable service, affordable repair'
    );

    this.metaService.setAuthor('MobiTronic');
  }
}
