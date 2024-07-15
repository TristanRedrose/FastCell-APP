import { Component } from '@angular/core';
import { IntersectionTriggerDirective } from '../../directives/intersectionTrigger/intersection-trigger.directive';

@Component({
  selector: 'app-hero-shop',
  standalone: true,
  imports: [IntersectionTriggerDirective],
  templateUrl: './hero-shop.component.html',
  styleUrl: './hero-shop.component.scss'
})
export class HeroShopComponent {

}
