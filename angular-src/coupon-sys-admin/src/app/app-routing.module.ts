import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { CompaniesComponent } from "./companies/companies.component";
import { CustomersComponent } from "./customers/customers.component";
import { CompanyEditComponent } from "./companies/company-edit/company-edit.component";
import { CompanyStartComponent } from "./companies/company-start/company-start.component";
import { CustomerStartComponent } from "./customers/customer-start/customer-start.component";
import { CustomerEditComponent } from "./customers/customer-edit/customer-edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/companies', pathMatch: 'full' },
    {
        path: 'companies', component: CompaniesComponent, children: [
            { path: '', component: CompanyStartComponent },
            { path: 'new', component: CompanyEditComponent },
            { path: ':id', component: CompanyEditComponent },
        ]
    },
    {
        path: 'customers', component: CustomersComponent, children: [
            { path: '', component: CustomerStartComponent },
            { path: 'new', component: CustomerEditComponent },
            { path: ':id', component: CustomerEditComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}