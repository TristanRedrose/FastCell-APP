import { Component } from '@angular/core';
import { IntersectionTriggerDirective } from '../../directives/intersectionTrigger/intersection-trigger.directive';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [IntersectionTriggerDirective],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
