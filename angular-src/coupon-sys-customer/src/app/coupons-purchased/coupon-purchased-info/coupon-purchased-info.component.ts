import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Coupon } from 'src/app/coupons/coupon.model';
import { CouponService } from 'src/app/coupons/coupon.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-purchased-info',
  templateUrl: './coupon-purchased-info.component.html',
  styleUrls: ['./coupon-purchased-info.component.css']
})
export class CouponPurchasedInfoComponent implements OnInit {

  subscription: Subscription;
  editedItem: Coupon = new Coupon();
  imagePath: String;

  constructor(private couponService: CouponService,
    private dataStorageService: DataStorageService,
    private router: Router) { }


    ngOnInit() {
      this.subscription = this.couponService.startedPurchase
        .subscribe(
          (index: number) => {
            this.editedItem = this.couponService.getCoupon(index);
            this.imagePath = this.editedItem.image;
          }
        );
    }

  onPurchase(){
    this.dataStorageService.porchaseCoupon(this.editedItem);
  }

  onBack() {
    this.router.navigate(['/purchased']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }}
