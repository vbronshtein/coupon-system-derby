import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponPurchasedListComponent } from './coupon-purchased-list.component';

describe('CouponPurchasedListComponent', () => {
  let component: CouponPurchasedListComponent;
  let fixture: ComponentFixture<CouponPurchasedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponPurchasedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponPurchasedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
