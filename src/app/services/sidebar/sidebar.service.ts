import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebars: {[key:string] : {isOpen:BehaviorSubject<boolean>}} = {}

  constructor() { }

  private getSidebarState(key: string) {
    if (!this.sidebars[key]) {
      this.sidebars[key] = {
        isOpen: new BehaviorSubject<boolean>(false)
      };
    }
    return this.sidebars[key];
  }

  isVisible(key:string): Observable<boolean> {
    return this.getSidebarState(key).isOpen.asObservable();
  }

  toggleSidebar(key:string) {
    Object.keys(this.sidebars).forEach(k => {
      if (k === key) {
        this.sidebars[k].isOpen.next(!this.sidebars[k].isOpen.value)
      } else {
        this.sidebars[k].isOpen.next(false)
      }
    })
  }

  closeSidebar(key:string) {
    this.sidebars[key].isOpen.next(false);
  }
}
