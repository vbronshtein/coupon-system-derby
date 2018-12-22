import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { CouponService } from "../coupons/coupon.service";
import { Coupon } from "../coupons/coupon.model";
import swal from 'sweetalert2';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private couponService: CouponService) { }

    private defaultFailMessage: string = 'Something doing wrong , Please contact your system administrator';

    getCoupons() {
        return this.http.get("http://localhost:8080/company/getallcoupon").subscribe(
            (resp) => {
                let coupons: Coupon[] = resp.json();
                this.couponService.setCoupon(coupons);
            },
            (err: Response) => {
                if (err.status == 501) {
                    this.failAlert(err.text())
                } else {
                    this.failAlert(this.defaultFailMessage);
                }
            }
        );
    }

    addCoupon(coupon: Coupon) {
        return this.http.post("http://localhost:8080/company/createcoupon", coupon)
            .subscribe(
                (resp) => {
                    if (resp.status == 200) {
                        this.successAlert("Coupon was created successfully")
                    }
                    this.getCoupons();
                },
                (err: Response) => {
                    if (err.status == 501) {
                        this.failAlert(err.text())
                    } else {
                        this.failAlert(this.defaultFailMessage);
                    }
                }
            );
    }

    updateCoupon(coupon: Coupon) {
        return this.http.put("http://localhost:8080/company/updatecoupon", coupon)
            .subscribe(
                (resp) => {
                    if (resp.status == 200) {
                        this.successAlert("Coupon was updated successfully")
                    }
                    this.getCoupons();
                },
                (err: Response) => {
                    if (err.status == 501) {
                        this.failAlert(err.text())
                    } else {
                        this.failAlert(this.defaultFailMessage);
                    }
                }
            );
    }

    deleteCoupon(coupon: Coupon) {
        return this.http.delete("http://localhost:8080/company/removecoupon/" + coupon.id)
            .subscribe(
                (resp) => {
                    if (resp.status == 200) {
                        this.successAlert("Coupon was removed successfully")
                    }
                    this.getCoupons();
                },
                (err: Response) => {
                    if (err.status == 501) {
                        this.failAlert(err.text())
                    } else {
                        this.failAlert(this.defaultFailMessage);
                    }
                }
            )
    }

    getPurchasedCouponsByType(type: string) {
        return this.http.get("http://localhost:8080/company/getcouponbytype/" + type).subscribe(
            (resp) => {
                let coupons: Coupon[] = resp.json();
                this.couponService.setCoupon(coupons);
            },
            (err: Response) => {
                if (err.status == 501) {
                    this.failAlert(err.text())
                } else {
                    this.failAlert(this.defaultFailMessage);
                }
            }
        );
    }

    getPurchasedCouponsUpToPrice(price: string) {
        return this.http.get("http://localhost:8080/company/getcouponuptoprice/" + price).subscribe(
            (resp) => {
                let coupons: Coupon[] = resp.json();
                this.couponService.setCoupon(coupons);
            },
            (err: Response) => {
                if (err.status == 501) {
                    this.failAlert(err.text())
                } else {
                    this.failAlert(this.defaultFailMessage);
                }
            }
        );
    }


    getPurchasedCouponsUpToDate(date: string) {
        return this.http.get("http://localhost:8080/company/getcouponuptodate/" + date).subscribe(
            (resp) => {
                let coupons: Coupon[] = resp.json();
                this.couponService.setCoupon(coupons);
            },
            (err: Response) => {
                if (err.status == 501) {
                    this.failAlert(err.text())
                } else {
                    this.failAlert(this.defaultFailMessage);
                }
            }
        );
    }

    successAlert(message: string) {
        swal({
            position: 'center',
            type: 'success',
            title: message,
        })
    }

    failAlert(message) {
        swal({
            type: 'error',
            title: 'Oops...',
            text: message,
        })
    }

}