import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { Coupon } from "./coupon.model";

@Injectable()
export class CouponService {

    constructor(){}
    
    couponsChanged = new Subject<Coupon[]>();
    startedPurchase = new Subject<number>();

    private indexSource = new BehaviorSubject(-1);
    currentIndex = this.indexSource.asObservable();

    changeIndex(index: number) {
        this.indexSource.next(index);
      }
    

    private coupons: Coupon[] ;
    setCoupon(coupons: Coupon[]) {
        this.coupons = coupons;
        this.couponsChanged.next(this.coupons.slice());
    }

    getCoupon(index: number) {
        return this.coupons[index];
    }

}