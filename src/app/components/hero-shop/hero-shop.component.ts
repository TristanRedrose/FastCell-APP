import { Component } from '@angular/core';
import { IntersectionTriggerDirective } from '../../directives/intersectionTrigger/intersection-trigger.directive';
import { NgOptimizedImage } from '@angular/common';
import { HomeShopSkeletonComponent } from '../skeleton/home-shop/home-shop-skeleton.component';

@Component({
  selector: 'app-hero-shop',
  standalone: true,
  imports: [IntersectionTriggerDirective,
    NgOptimizedImage,
    HomeShopSkeletonComponent
  ],
  templateUrl: './hero-shop.component.html',
  styleUrl: './hero-shop.component.scss'
})
export class HeroShopComponent {

}
