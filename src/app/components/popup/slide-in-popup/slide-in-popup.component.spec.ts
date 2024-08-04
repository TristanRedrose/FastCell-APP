import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideInPopupComponent } from './slide-in-popup.component';

describe('SlideInPopupComponent', () => {
  let component: SlideInPopupComponent;
  let fixture: ComponentFixture<SlideInPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideInPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideInPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
