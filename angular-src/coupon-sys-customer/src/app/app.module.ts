import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CouponsComponent } from './coupons/coupons.component';
import { HeaderComponent } from './header/header.component';
import { CouponService } from './coupons/coupon.service';
import { DataStorageService } from './shared/data-storage.service';
import { CouponListComponent } from './coupons/coupon-list/coupon-list.component';
import { CouponItemComponent } from './coupons/coupon-item/coupon-item.component';
import { CouponInfoComponent } from './coupons/coupon-info/coupon-info.component';
import { CouponsPurchasedComponent } from './coupons-purchased/coupons-purchased.component';
import { CouponPurchasedListComponent } from './coupons-purchased/coupon-purchased-list/coupon-purchased-list.component';
import { CouponPurchasedItemComponent } from './coupons-purchased/coupon-purchased-item/coupon-purchased-item.component';
import { CouponPurchasedInfoComponent } from './coupons-purchased/coupon-purchased-info/coupon-purchased-info.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    CouponsComponent,
    HeaderComponent,
    CouponListComponent,
    CouponItemComponent,
    CouponInfoComponent,
    CouponsPurchasedComponent,
    CouponPurchasedListComponent,
    CouponPurchasedItemComponent,
    CouponPurchasedInfoComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CouponService,
    DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
