import { Component } from '@angular/core';
import { ContactMapComponent } from '../../components/contact/contact-map/contact-map.component';
import { SlideInPopupComponent } from '../../components/popup/slide-in-popup/slide-in-popup.component';
import { MetaService } from '../../services/meta/meta.service';
import { ContactLayoutComponent } from '../../components/contact/contact-layout/contact-layout.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ContactMapComponent,
    SlideInPopupComponent,
    ContactLayoutComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  constructor(private metaService: MetaService) {}
  
  ngOnInit(): void {
    this.metaService.setMetaTags(
      'MobiTronic - Kontakt',
      'MobiTronic - Your trusted partner for mobile phone repair services. We offer fast, reliable, and affordable solutions for all your mobile device needs.',
      'MobiTronic, mobile phone repair, fast service, reliable service, affordable repair'
    );

    this.metaService.setAuthor('MobiTronic');
  }
}
