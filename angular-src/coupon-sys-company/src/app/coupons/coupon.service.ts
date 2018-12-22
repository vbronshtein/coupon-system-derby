import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Coupon } from "./coupon.model";

@Injectable()
export class CouponService {

    constructor() { }

    couponsChanged = new Subject<Coupon[]>();
    startedEditing = new Subject<number>();

    private coupons: Coupon[];

    getCoupon(index: number) {
        return this.coupons[index];
    }

    setCoupon(coupons: Coupon[]) {
        this.coupons = coupons;
        this.couponsChanged.next(this.coupons.slice());
    }

    addCoupon(coupon: Coupon) {
        this.coupons.push(coupon);
        this.couponsChanged.next(this.coupons.slice());
    }
}