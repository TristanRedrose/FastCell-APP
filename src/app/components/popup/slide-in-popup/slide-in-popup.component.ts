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
  popupText:string = '';
  popupColor: string = 'hsl(136, 65%, 51%)';

  constructor(private popupService: PopupService) {}

  ngOnInit() {
    this.popupService.popupError.subscribe(isError => {
      if (!isError) {
        this.popupColor = 'hsl(136, 65%, 51%)';
        return;
      }
      this.popupColor = '#ed4337';
    })

    this.popupService.popupText.subscribe(text => {
      this.popupText = text;
    })

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
              setTimeout(() => {
                this.close();
              }, 500); 
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
