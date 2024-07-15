import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentRoute: string = '';

  constructor(private router: Router) {

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url.substring(1);
      }
    })
    
  }

  goToPage(page: string): void {
    this.router.navigate([`/${page}`])
  }

  toggleActiveOnRoute(route: string): string {
    if (this.currentRoute === route) {
      return "active";
    }

    return '';
  }

}
