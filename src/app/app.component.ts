import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavigationService } from './services/navigation/navigation.service';
import { SidebarService } from './services/sidebar/sidebar.service';
import { PopupService } from './services/popup/popup.service';
import { MetaService } from './services/meta/meta.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
  ],
  providers: [
    NavigationService,
    SidebarService,
    PopupService,
    MetaService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FastCell-APP';
}
