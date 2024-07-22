import { Component } from '@angular/core';
import { SidebarLayoutComponent } from '../sidebar-layout/sidebar-layout.component';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [SidebarLayoutComponent, CommonModule],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.scss'
})
export class NavSidebarComponent {
  currentRoute: string = '';
  
  constructor(
      private navigationService: NavigationService,
      private sidebarService: SidebarService
    ) {}

  toggleActiveOnRoute(route: string): string {
    if (this.navigationService.currentRoute === route) {
      return "active";
    }

    return '';
  }

  goToPage(page: string) {
    this.navigationService.goToPage(page);
    this.sidebarService.toggleSidebar('nav-sidebar');
  }
}
