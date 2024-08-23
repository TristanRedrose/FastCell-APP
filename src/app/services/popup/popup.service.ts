import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PopupService {
  private _isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  popupState: Observable<boolean> = this._isOpen.asObservable();

  constructor() { }

  openPopup():void {
    this._isOpen.next(true);
  }

  closePopup():void {
    this._isOpen.next(false);
  }
}
