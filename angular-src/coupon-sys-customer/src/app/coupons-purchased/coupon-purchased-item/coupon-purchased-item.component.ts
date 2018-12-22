import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from 'src/app/coupons/coupon.model';

@Component({
  selector: 'app-coupon-purchased-item',
  templateUrl: './coupon-purchased-item.component.html',
  styleUrls: ['./coupon-purchased-item.component.css']
})
export class CouponPurchasedItemComponent implements OnInit {

  @Input() coupon: Coupon;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
