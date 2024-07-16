import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private navigationService: NavigationService) {}

  goToPage(page: string): void {
    this.navigationService.goToPage(page);
  }
  
  toggleActiveOnRoute(route: string): string {
    if (this.navigationService.currentRoute === route) {
      return "active";
    }

    return '';
  }
}
