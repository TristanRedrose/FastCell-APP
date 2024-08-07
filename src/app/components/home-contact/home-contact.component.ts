import { Component } from '@angular/core';
import { ContactInfoComponent } from '../contact/contact-info/contact-info.component';
import { ContactMapComponent } from '../contact/contact-map/contact-map.component';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { ContactInfoSkeletonComponent } from '../skeleton/contact-info/contact-info-skeleton.component';

@Component({
  selector: 'app-home-contact',
  standalone: true,
  imports: [
    ContactInfoComponent,
    GoogleMapComponent,
    ContactInfoSkeletonComponent
  ],
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.scss'
})
export class HomeContactComponent {

}
