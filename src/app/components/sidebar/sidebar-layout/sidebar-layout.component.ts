import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/sidebar/sidebar.service';


@Component({
  selector: 'app-sidebar-layout',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-layout.component.html',
  styleUrl: './sidebar-layout.component.scss'
})

export class SidebarLayoutComponent {
  @Input() key:string = '';
  isOpen: boolean = false;
  
  constructor(private sidebarService: SidebarService) { }

  ngOnInit() :void {
    this.sidebarService.isVisible(this.key).subscribe(isOpen => this.isOpen = isOpen);
  }
  
}
