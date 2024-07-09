import { Component } from '@angular/core';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { HeroAboutComponent } from '../../components/hero-about/hero-about.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutUsComponent,
    HeroAboutComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
