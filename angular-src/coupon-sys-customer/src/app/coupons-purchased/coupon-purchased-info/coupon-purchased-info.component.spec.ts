import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPurchasedInfoComponent } from './coupon-purchased-info.component';

describe('CouponPurchasedInfoComponent', () => {
  let component: CouponPurchasedInfoComponent;
  let fixture: ComponentFixture<CouponPurchasedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponPurchasedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponPurchasedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
