import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/coupons/coupon.model';
import { Subscription } from 'rxjs';
import { CouponService } from 'src/app/coupons/coupon.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-purchased-list',
  templateUrl: './coupon-purchased-list.component.html',
  styleUrls: ['./coupon-purchased-list.component.css']
})
export class CouponPurchasedListComponent implements OnInit {

  coupons: Coupon[];
  subscription: Subscription;
  typeFilter = false;
  priceFilter = false;
  selectedOption: string;

  constructor(
    private couponService: CouponService,
    private dataStorageService: DataStorageService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.subscription = this.dataStorageService.getPurchasedCoupons();
    this.couponService.couponsChanged.subscribe(
      (coupons: Coupon[]) => {
        this.coupons = coupons;
      }
    );
  }

  onSelectedItem(index: number) {
    this.couponService.startedPurchase.next(index);
  }

  onTypeFilter() {
    this.typeFilter = true;
    this.priceFilter = false;
  }

  onPriceFilter() {
    this.priceFilter = true;
    this.typeFilter = false;
  }

  onClearFilter() {
    this.priceFilter = false;
    this.typeFilter = false;
    this.dataStorageService.getPurchasedCoupons();
    this.router.navigate(['/purchased']);
  }

  onTypeFiterApply() {
    this.dataStorageService.getPurchasedCouponsByType(this.selectedOption);
  }

  onPriceFiterApply() {
    this.dataStorageService.getPurchasedCouponsUpToPrice(this.selectedOption);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
