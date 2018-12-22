import { Component, OnInit } from '@angular/core';
import { Coupon } from '../coupon.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
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
  filterSelected: string = "";
  selectedOption: string;

  constructor(
    private couponService: CouponService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.subscription = this.dataStorageService.getCoupons();
    this.couponService.couponsChanged.subscribe(
      (coupons: Coupon[]) => {
        this.coupons = coupons;
      }
    );
  }

  onNewCoupon() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEditItem(index: number) {
    this.couponService.startedEditing.next(index);
  }

  onTypeFilter() {
    this.filterSelected = "type";
  }
  onPriceFilter() {
    this.filterSelected = "price";
  }
  onDateFilter() {
    this.filterSelected = "date";
  }
  onClearFilter() {
    this.filterSelected = "";
    this.dataStorageService.getCoupons();
  }


  onTypeFiterApply() {
    this.dataStorageService.getPurchasedCouponsByType(this.selectedOption);
    console.log(this.selectedOption)
  }

  onPriceFiterApply() {
    this.dataStorageService.getPurchasedCouponsUpToPrice(this.selectedOption);
  }

  onDateFiterApply() {
    this.dataStorageService.getPurchasedCouponsUpToDate(this.selectedOption);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
