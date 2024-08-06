import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShopSkeletonComponent } from './home-shop-skeleton.component';

describe('HomeShopSkeletonComponent', () => {
  let component: HomeShopSkeletonComponent;
  let fixture: ComponentFixture<HomeShopSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeShopSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeShopSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
