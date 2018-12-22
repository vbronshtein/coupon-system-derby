import { Component, OnInit } from '@angular/core';
import { Coupon } from '../coupon.model';
import { Subscription } from 'rxjs';
import { CouponService } from '../coupon.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {

  coupons: Coupon[];
  subscription: Subscription;

  constructor(
    private couponService: CouponService,
    private dataStorageService: DataStorageService,
  ) { }

  ngOnInit() {
    this.subscription = this.dataStorageService.getCoupons();
    this.couponService.couponsChanged.subscribe(
      (coupons: Coupon[]) => {
        this.coupons = coupons;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
