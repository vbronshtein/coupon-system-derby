import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from '../../coupon.model';

@Component({
  selector: 'app-coupon-item',
  templateUrl: './coupon-item.component.html',
  styleUrls: ['./coupon-item.component.css']
})
export class CouponItemComponent implements OnInit {

  @Input() coupon: Coupon;
  @Input() index: number;
  
  constructor() { }

  ngOnInit() {
  }

}
