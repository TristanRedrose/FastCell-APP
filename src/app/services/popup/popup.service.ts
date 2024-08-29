import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PopupService {
  private _text: BehaviorSubject<string> = new BehaviorSubject<string>('');
  popupText: Observable<string> = this._text.asObservable();
  private _isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  popupState: Observable<boolean> = this._isOpen.asObservable();
  private _isError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  popupError: Observable<boolean> = this._isError.asObservable();

  constructor() { }

  openPopup(text: string, error: boolean):void {
    this._isOpen.next(true);
    this._text.next(text);
    this._isError.next(error)
  }

  closePopup():void {
    this._isOpen.next(false);
    this._text.next('');
    this._isError.next(false);
  }
}
