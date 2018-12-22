import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsPurchasedComponent } from './coupons-purchased.component';

describe('CouponsPurchasedComponent', () => {
  let component: CouponsPurchasedComponent;
  let fixture: ComponentFixture<CouponsPurchasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponsPurchasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
