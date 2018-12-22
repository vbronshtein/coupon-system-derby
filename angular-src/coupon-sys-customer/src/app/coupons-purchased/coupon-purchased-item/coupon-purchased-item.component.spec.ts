import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPurchasedItemComponent } from './coupon-purchased-item.component';

describe('CouponPurchasedItemComponent', () => {
  let component: CouponPurchasedItemComponent;
  let fixture: ComponentFixture<CouponPurchasedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponPurchasedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponPurchasedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
