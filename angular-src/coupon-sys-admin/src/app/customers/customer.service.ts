import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Customer } from "./customer.model";

@Injectable()
export class CustomerService {

    constructor() { }

    customersChanged = new Subject<Customer[]>();
    startedEditing = new Subject<number>();

    private customers: Customer[];

    getCustomer(index: number) {
        return this.customers[index];
    }

    setCompany(customers: Customer[]) {
        this.customers = customers;
        this.customersChanged.next(this.customers.slice());
    }

    addCompany(customer: Customer) {
        this.customers.push(customer);
        this.customersChanged.next(this.customers.slice());
    }
}