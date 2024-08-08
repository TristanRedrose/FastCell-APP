import { Component } from '@angular/core';
import { IntersectionTriggerDirective } from '../../directives/intersectionTrigger/intersection-trigger.directive';
import { HomeAboutSkeletonComponent } from '../skeleton/home-about/home-about-skeleton.component';

@Component({
  selector: 'app-hero-about',
  standalone: true,
  imports: [
    IntersectionTriggerDirective,
    HomeAboutSkeletonComponent
  ],
  templateUrl: './hero-about.component.html',
  styleUrl: './hero-about.component.scss'
})
export class HeroAboutComponent {

}
