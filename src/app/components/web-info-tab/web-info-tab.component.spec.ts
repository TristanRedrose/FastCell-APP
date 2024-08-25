import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebInfoTabComponent } from './web-info-tab.component';

describe('WebInfoTabComponent', () => {
  let component: WebInfoTabComponent;
  let fixture: ComponentFixture<WebInfoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebInfoTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
