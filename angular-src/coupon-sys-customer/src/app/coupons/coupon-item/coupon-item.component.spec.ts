import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponItemComponent } from './coupon-item.component';

describe('CouponItemComponent', () => {
  let component: CouponItemComponent;
  let fixture: ComponentFixture<CouponItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
