import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { CompanyService } from "../companies/company.service";
import { Company } from "../companies/company.model";
import { Customer } from "../customers/customer.model";
import { CustomerService } from "../customers/customer.service";
import swal from 'sweetalert2';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private companyService: CompanyService,
        private customerService: CustomerService) { }
    
    private defaultFailMessage: string = 'Something doing wrong , Please contact your system administrator';


    getCompanies() {
        return this.http.get("http://localhost:8080/admin/getallcompanies")
        
        .subscribe(
            (resp) => {
                let companies: Company[] = resp.json();
                this.companyService.setCompany(companies);

            },
            (err: Response) => {
                if(err.status == 501) {
                    this.failAlert(err.text())
                 } else { 
                    this.failAlert(this.defaultFailMessage);
                 }
            }
        );
    }

    addCompany(company: Company) {
        return this.http.post("http://localhost:8080/admin/createcompany", company)
            .subscribe(
                (resp) => {
                    if(resp.status == 200) {
                        this.successAlert("Company was created successfully")
                    }
                    this.getCompanies();
                },
                (err: Response) => {
                    if(err.status == 501) {
                        this.failAlert(err.text())
                     } else { 
                        this.failAlert(this.defaultFailMessage);
                     }
                }
            );
    }

    updateCompany(company: Company) {
        return this.http.put("http://localhost:8080/admin/updatecompany", company)
            .subscribe(
                (resp) => {
                    if(resp.status == 200) {
                        this.successAlert("Company was updated successfully")
                    }
                    this.getCompanies();
                },
                (err: Response) => {
                    if(err.status == 501) {
                        this.failAlert(err.text())
                     } else { 
                        this.failAlert(this.defaultFailMessage);
                     }
                }
            );
    }

    deleteCompany(company: Company) {
        return this.http.delete("http://localhost:8080/admin/removecompany/" + company.id)
            .subscribe(
                (resp) => {
                    if(resp.status == 200) {
                        this.successAlert("Company was removed successfully")
                    }
                    this.getCompanies();
                },
                (err: Response) => {
                    if(err.status == 501) {
                        this.failAlert(err.text())
                     } else { 
                        this.failAlert(this.defaultFailMessage);
                     }
                }
            )
    }

    getCustomers() {
        return this.http.get("http://localhost:8080/admin/getallcustomers").subscribe(
            (resp) => {
                let customers: Customer[] = resp.json();
                this.customerService.setCompany(customers);
            },
            (err: Response) => {
                if(err.status == 501) {
                    this.failAlert(err.text())
                 } else { 
                    this.failAlert(this.defaultFailMessage);
                 }
            }
        );
    }

    addCustomer(customer: Customer) {
        return this.http.post("http://localhost:8080/admin/createcustomer", customer)
            .subscribe(
                (resp) => {
                    if(resp.status == 200) {
                        this.successAlert("Customer was created successfully")
                    }
                    this.getCustomers();
                },
                (err: Response) => {
                    if(err.status == 501) {
                        this.failAlert(err.text())
                     } else { 
                        this.failAlert(this.defaultFailMessage);
                     }
                }
            );
    }

    updateCustomer(customer: Customer) {
        return this.http.put("http://localhost:8080/admin/updatecustomer", customer)
            .subscribe(
                (resp) => {
                    if(resp.status == 200) {
                        this.successAlert("Customer was updated successfully")
                    }
                    this.getCustomers();
                },
                (err: Response) => {
                    if(err.status == 501) {
                        this.failAlert(err.text())
                     } else { 
                        this.failAlert(this.defaultFailMessage);
                     }
                }
            );
    }

    deleteCustomer(customer: Customer) {
        return this.http.delete("http://localhost:8080/admin/removecustomer/" + customer.id)
            .subscribe(
                (resp) => {
                    if(resp.status == 200) {
                        this.successAlert("Customer was removed successfully")
                    }
                    this.getCustomers();
                },
                (err: Response) => {
                    if(err.status == 501) {
                        this.failAlert(err.text())
                     } else { 
                        this.failAlert(this.defaultFailMessage);
                     }
                }
            )
    }

    successAlert(message: string) {
        swal({
            position: 'center',
            type: 'success',
            title: message,
          })
    }
    
    failAlert(message ) {
        swal({
            type: 'error',
            title: 'Oops...',
            text: message,
          })
    }

}