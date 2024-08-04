import { Component, ViewChild } from '@angular/core';
import { PopupService } from '../../../services/popup/popup.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-in-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-in-popup.component.html',
  styleUrl: './slide-in-popup.component.scss'
})
export class SlideInPopupComponent {
  isVisible: boolean = false;

  constructor(private popupService: PopupService) {}

  ngOnInit() {
    this.popupService.popupState.subscribe(isVisible => {
      this.isVisible = isVisible;
      if (typeof window === 'undefined') return;

      if (isVisible) {
        setTimeout(() => {
          const popupElement = document.querySelector('.popup');
          if (popupElement) {
            popupElement.classList.add('show');
            
            // remove popup after 3 seconds if the user doesnt close it
            setTimeout(() => {
              if (this.isVisible) popupElement.classList.remove('show');
            }, 3000); 
          }
        }, 100); 
      }
      else {
        const popupElement = document.querySelector('.popup');
        if (popupElement) {
          popupElement.classList.remove('show');
        }
        
      }
    })
  }

  close():void {
    this.popupService.closePopup();
  }
}
