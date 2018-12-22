import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CouponsComponent } from "./coupons/coupons.component";
import { CouponStartComponent } from "./coupons/coupon-start/coupon-start.component";
import { CouponEditComponent } from "./coupons/coupon-edit/coupon-edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/coupons', pathMatch: 'full' },
    {
        path: 'coupons', component: CouponsComponent, children: [
            { path: '', component: CouponStartComponent },
            { path: 'new', component: CouponEditComponent },
            { path: ':id', component: CouponEditComponent },
        ]
    },
    { path: 'filters', component: CouponEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}