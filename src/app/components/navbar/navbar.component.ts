import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentRoute: string = '';

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
