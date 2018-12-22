import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Coupon } from '../coupon.model';
import { CouponService } from '../coupon.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-info',
  templateUrl: './coupon-info.component.html',
  styleUrls: ['./coupon-info.component.css']
})
export class CouponInfoComponent implements OnInit {

  subscription: Subscription;
  editedItemIndex: number;
  editedItem: Coupon;

  constructor(private couponService: CouponService,
    private dataStorageService: DataStorageService,
    private router: Router) { }

  ngOnInit() {
   this.subscription = this.couponService.currentIndex.subscribe(index => this.editedItemIndex = index);
          this.editedItem = this.couponService.getCoupon(this.editedItemIndex);
  }

  onPurchase(){
    this.dataStorageService.porchaseCoupon(this.editedItem);
  }

  onBack() {
    this.router.navigate(['/coupons']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
