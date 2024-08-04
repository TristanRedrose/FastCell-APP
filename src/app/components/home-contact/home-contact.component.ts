import { Component } from '@angular/core';
import { ContactInfoComponent } from '../contact/contact-info/contact-info.component';
import { ContactMapComponent } from '../contact/contact-map/contact-map.component';
import { GoogleMapComponent } from '../google-map/google-map.component';

@Component({
  selector: 'app-home-contact',
  standalone: true,
  imports: [
    ContactInfoComponent,
    GoogleMapComponent
  ],
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.scss'
})
export class HomeContactComponent {

}
