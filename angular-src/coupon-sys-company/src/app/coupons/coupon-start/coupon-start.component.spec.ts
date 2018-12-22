import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponStartComponent } from './coupon-start.component';

describe('CouponStartComponent', () => {
  let component: CouponStartComponent;
  let fixture: ComponentFixture<CouponStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
