import { Component, OnInit, Input, Output } from '@angular/core';
import { Coupon } from '../coupon.model';
import { Router } from '@angular/router';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupon-item',
  templateUrl: './coupon-item.component.html',
  styleUrls: ['./coupon-item.component.css']
})
export class CouponItemComponent implements OnInit {

  @Input() coupon: Coupon;
  @Input() index: number;

  constructor(
    private couponService: CouponService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSelect(index: number) {
    this.couponService.changeIndex(index);
    this.router.navigate(['../couponinfo']);
  }
}
