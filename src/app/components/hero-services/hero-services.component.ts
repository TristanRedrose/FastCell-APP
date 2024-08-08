import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HomeServicesSkeletonComponent } from '../skeleton/home-services/home-services-skeleton.component';

@Component({
  selector: 'app-hero-services',
  standalone: true,
  imports: [NgOptimizedImage, HomeServicesSkeletonComponent],
  templateUrl: './hero-services.component.html',
  styleUrl: './hero-services.component.scss'
})
export class HeroServicesComponent {

}
