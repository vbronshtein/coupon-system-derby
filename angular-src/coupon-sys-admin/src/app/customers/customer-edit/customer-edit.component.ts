import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  @ViewChild('f') customerForm: NgForm;
  editMode = false;
  manageMode = true;
  subscription: Subscription;
  editedItemIndex: number;
  editedItem: Customer;

  constructor(private customerService: CustomerService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.customerService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.customerService.getCustomer(index);
          this.customerForm.setValue({
            custName: this.editedItem.custName,
            password: this.editedItem.password
          });
          this.manageMode = false;
        }
      );

  }


  onSubmit(form: NgForm) {
    const value = form.value;
    const newCompany = new Customer(value.custName, value.password);
    if (this.editMode) {
      this.editedItem.password = newCompany.password;
      this.dataStorageService.updateCustomer(this.editedItem);
      this.router.navigate(['../'], { relativeTo: this.route });
    } else {
      this.dataStorageService.addCustomer(newCompany);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.customerForm.reset();
  }

  onManage() {
    this.manageMode = true;
  }

  onDelete() {
    this.dataStorageService.deleteCustomer(this.editedItem);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
