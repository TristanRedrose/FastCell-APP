import { Component } from '@angular/core';
import { IntersectionTriggerDirective } from '../../directives/intersectionTrigger/intersection-trigger.directive';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { GoogleMapComponent } from '../google-map/google-map.component';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [
    IntersectionTriggerDirective,
    ContactFormComponent,
    GoogleMapComponent
  ],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {

}
