import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class NavigationService {
  private _currentRoute: string = '';

  constructor(private router: Router, ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this._currentRoute = e.url.substring(1);
      }
    })
  }

  goToPage(page: string): void {
    this.router.navigate([`/${page}`]);
    window.scroll(
      {top: 0,left:0}
    )
  }

  set currentRoute(newRoute: string) {
    this._currentRoute = newRoute;
  }

  get currentRoute(): string {
    return this._currentRoute;
  }
}
