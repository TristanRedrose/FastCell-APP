import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router:Router) {}

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
    window.scroll(
      { 
        top: 0, 
        left: 0,
      }
    );
  }
}
