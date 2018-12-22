import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { CustomersComponent } from './customers/customers.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CompanyItemComponent } from './companies/company-list/company-item/company-item.component';
import { CustomerItemComponent } from './customers/customer-list/customer-item/customer-item.component';
import { CompanyService } from './companies/company.service';
import { CompanyEditComponent } from './companies/company-edit/company-edit.component';
import { CompanyStartComponent } from './companies/company-start/company-start.component';
import { DataStorageService } from './shared/data-storage.service';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerStartComponent } from './customers/customer-start/customer-start.component';
import { CustomerService } from './customers/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CustomersComponent,
    HeaderComponent,
    CompanyListComponent,
    CustomerListComponent,
    CompanyItemComponent,
    CustomerItemComponent,
    CompanyEditComponent,
    CompanyStartComponent,
    CustomerEditComponent,
    CustomerStartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CompanyService,
              CustomerService,
              DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
