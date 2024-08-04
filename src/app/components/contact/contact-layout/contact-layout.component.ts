import { Component } from '@angular/core';
import { IntersectionTriggerDirective } from '../../../directives/intersectionTrigger/intersection-trigger.directive';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';

@Component({
  selector: 'app-contact-layout',
  standalone: true,
  imports: [
    IntersectionTriggerDirective,
    ContactFormComponent,
    ContactInfoComponent
  ],
  templateUrl: './contact-layout.component.html',
  styleUrl: './contact-layout.component.scss'
})

export class ContactLayoutComponent {

}
