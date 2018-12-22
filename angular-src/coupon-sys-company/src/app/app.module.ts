import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CouponsComponent } from './coupons/coupons.component';
import { CouponEditComponent } from './coupons/coupon-edit/coupon-edit.component';
import { CouponListComponent } from './coupons/coupon-list/coupon-list.component';
import { CouponItemComponent } from './coupons/coupon-list/coupon-item/coupon-item.component';
import { CouponStartComponent } from './coupons/coupon-start/coupon-start.component';
import { AppRoutingModule } from './app-routing.module';
import { CouponService } from './coupons/coupon.service';
import { DataStorageService } from './shared/data-storage.service';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CouponsComponent,
    CouponEditComponent,
    CouponListComponent,
    CouponItemComponent,
    CouponStartComponent,
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
