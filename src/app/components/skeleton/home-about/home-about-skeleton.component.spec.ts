import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutSkeletonComponent } from './home-about-skeleton.component';

describe('HomeAboutSkeletonComponent', () => {
  let component: HomeAboutSkeletonComponent;
  let fixture: ComponentFixture<HomeAboutSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAboutSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAboutSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
