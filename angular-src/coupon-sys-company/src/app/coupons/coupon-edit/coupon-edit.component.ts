import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Coupon } from '../coupon.model';
import { CouponService } from '../coupon.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coupon-edit',
  templateUrl: './coupon-edit.component.html',
  styleUrls: ['./coupon-edit.component.css']
})
export class CouponEditComponent implements OnInit {
  @ViewChild('f') couponForm: NgForm;
  editMode = false;
  manageMode = true;
  subscription: Subscription;
  editedItemIndex: number;
  editedItem: Coupon;

  constructor(private couponService: CouponService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.couponService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.couponService.getCoupon(index);
          this.couponForm.setValue({
            title: this.editedItem.title,
            startDate: this.editedItem.startDate,
            endDate: this.editedItem.endDate,
            amount: this.editedItem.amount,
            type: this.editedItem.type,
            message: this.editedItem.message,
            price: this.editedItem.price,
            image: this.editedItem.image
          });
          this.manageMode = false;
        }
      );

  }


  onSubmit(form: NgForm) {
    const value = form.value;
    const newCoupon = new Coupon(value.title, value.startDate, value.endDate, value.amount, value.type, value.message, value.price, value.image);
    if (this.editMode) {
      this.editedItem.endDate = newCoupon.endDate;
      this.editedItem.price = newCoupon.price;
      this.dataStorageService.updateCoupon(this.editedItem);
      this.router.navigate(['../'], { relativeTo: this.route });
    } else {
      this.dataStorageService.addCoupon(newCoupon);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.couponForm.reset();
  }

  onManage() {
    this.manageMode = true;
  }

  onDelete() {
    this.dataStorageService.deleteCoupon(this.editedItem);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
