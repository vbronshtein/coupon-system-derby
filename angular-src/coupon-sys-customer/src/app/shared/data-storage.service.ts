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
        return this.http.get("http://localhost:8080/customer/getallcoupons")
            .subscribe(
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


    porchaseCoupon(coupon: Coupon) {
        console.log(coupon);
        return this.http.post("http://localhost:8080/customer/purchasecoupon", coupon)
            .subscribe(
                (resp) => {
                    if (resp.status == 200) {
                        this.successAlert("Coupon was purchased successfully")
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

    getPurchasedCouponsByType(type: string) {
        return this.http.get("http://localhost:8080/customer/getallpurchasedcouponsbytype/" + type).subscribe(
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
        return this.http.get("http://localhost:8080/customer/getallpurchasedcouponsuptoprice/" + price).subscribe(
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

    getPurchasedCoupons() {
        return this.http.get("http://localhost:8080/customer/getallpurchesedcoupons").subscribe(
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