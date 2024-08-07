import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-info-skeleton.component.html',
  styleUrl: './contact-info-skeleton.component.scss'
})
export class ContactInfoSkeletonComponent {
  elements: number[] = [1, 2, 3]
}
