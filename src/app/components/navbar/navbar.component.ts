import { CommonModule } from '@angular/common';
import { Component, Renderer2, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';
import { NavSidebarComponent } from '../sidebar/nav-sidebar/nav-sidebar.component';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavSidebarComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  currentRoute: string = '';
  menuIsOpen: boolean = false;
  sidebarKey = "nav-sidebar";

  constructor(
    private navigationService: NavigationService, 
    private sidebarService: SidebarService,
    private renderer: Renderer2
  ) {}

  ngOnInit():void {
    this.renderer.listen('window', 'resize', () => {this.closeSidebarOnWidthTreshold()})
  }


  goToPage(page: string): void {
    this.navigationService.goToPage(page);
  }

  toggleActiveOnRoute(route: string): string {
    if (this.navigationService.currentRoute === route) {
      return "active";
    }

    return '';
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar(this.sidebarKey);
    this.sidebarService.isVisible(this.sidebarKey).subscribe(isOpen => this.menuIsOpen= isOpen);
  }

  closeSidebarOnWidthTreshold() {
    if (window.innerWidth > 600 && this.menuIsOpen) {
      this.toggleSidebar();
    }
  }

  closeNavSidebar(): void {
    if (this.menuIsOpen) this.sidebarService.closeSidebar('nav-sidebar');
    window.scroll(
      {top: 0,left:0}
    );
  }
}
