import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  menuIsOpen: boolean = false;
  sidebarKey: string = "nav-sidebar";

  constructor(
    private navigationService: NavigationService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.sidebarService.isVisible(this.sidebarKey).subscribe(isVisible => this.menuIsOpen = isVisible);
  }

  goToPage(page: string): void {
    this.navigationService.goToPage(page);
    if (this.menuIsOpen) this.sidebarService.toggleSidebar(this.sidebarKey);
  }
  
  toggleActiveOnRoute(route: string): string {
    if (this.navigationService.currentRoute === route) {
      return "active";
    }

    return '';
  }
}
