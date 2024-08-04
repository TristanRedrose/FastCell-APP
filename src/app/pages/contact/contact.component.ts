import { Component } from '@angular/core';
import { ContactBannerComponent } from '../../components/contact-banner/contact-banner.component';
import { ContactInfoComponent } from '../../components/contact-info/contact-info.component';
import { SlideInPopupComponent } from '../../components/popup/slide-in-popup/slide-in-popup.component';

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

}
