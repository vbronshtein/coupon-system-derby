import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { Subscription } from 'rxjs';
import { CustomerService } from '../customer.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  subscription: Subscription;

  constructor(private customerService: CustomerService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.subscription = this.dataStorageService.getCustomers();
    this.customerService.customersChanged.subscribe(
      (customers: Customer[]) => {
        this.customers = customers;
      }
    );
  }

  onNewCustomer() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEditItem(index: number) {
    this.customerService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
