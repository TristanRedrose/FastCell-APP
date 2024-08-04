import { Component } from '@angular/core';
import { GoogleMapComponent } from '../../google-map/google-map.component';

@Component({
  selector: 'app-contact-map',
  standalone: true,
  imports: [GoogleMapComponent],
  templateUrl: './contact-map.component.html',
  styleUrl: './contact-map.component.scss'
})
export class ContactMapComponent {

}
