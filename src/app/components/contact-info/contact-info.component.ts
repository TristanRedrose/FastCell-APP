import { Component } from '@angular/core';
import { IntersectionTriggerDirective } from '../../directives/intersectionTrigger/intersection-trigger.directive';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [IntersectionTriggerDirective],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {

}
