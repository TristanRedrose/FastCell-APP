import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicesSkeletonComponent } from './home-services-skeleton.component';

describe('HomeServicesSkeletonComponent', () => {
  let component: HomeServicesSkeletonComponent;
  let fixture: ComponentFixture<HomeServicesSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeServicesSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeServicesSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
