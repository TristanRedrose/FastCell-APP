import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoSkeletonComponent } from './contact-info-skeleton.component';

describe('ContactInfoSkeletonComponent', () => {
  let component: ContactInfoSkeletonComponent;
  let fixture: ComponentFixture<ContactInfoSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInfoSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactInfoSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
