import { Component } from '@angular/core';
import { GoogleMapComponent } from '../google-map/google-map.component';

@Component({
  selector: 'app-contact-banner',
  standalone: true,
  imports: [GoogleMapComponent],
  templateUrl: './contact-banner.component.html',
  styleUrl: './contact-banner.component.scss'
})
export class ContactBannerComponent {

}
