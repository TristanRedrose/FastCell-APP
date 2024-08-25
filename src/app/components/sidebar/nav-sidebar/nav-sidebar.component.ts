import { Component } from '@angular/core';
import { SidebarLayoutComponent } from '../sidebar-layout/sidebar-layout.component';
import { NavigationService } from '../../../services/navigation/navigation.service';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../services/sidebar/sidebar.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [SidebarLayoutComponent, CommonModule, RouterModule],
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

  closeNavSidebar() {
    this.sidebarService.closeSidebar('nav-sidebar');
  }
}
