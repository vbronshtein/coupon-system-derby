import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CouponsComponent } from "./coupons/coupons.component";
import { CouponInfoComponent } from "./coupons/coupon-info/coupon-info.component";
import { CouponsPurchasedComponent } from "./coupons-purchased/coupons-purchased.component";
import { CouponPurchasedInfoComponent } from "./coupons-purchased/coupon-purchased-info/coupon-purchased-info.component";
import { CouponPurchasedListComponent } from "./coupons-purchased/coupon-purchased-list/coupon-purchased-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/coupons', pathMatch: 'full' },
    {
        path: 'coupons', component: CouponsComponent, children: [
            { path: ':id', component: CouponPurchasedListComponent }
        ]
    },
    {
        path: 'purchased', component: CouponsPurchasedComponent, children: [
            { path: ':id', component: CouponPurchasedInfoComponent },
        ]
    },
    {path: 'couponinfo', component: CouponInfoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}