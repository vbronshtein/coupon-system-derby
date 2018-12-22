import { Company } from "./company.model";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CompanyService {

    constructor() { }

    companiesChanged = new Subject<Company[]>();
    startedEditing = new Subject<number>();

    private companies: Company[];

    getCompany(index: number) {
        return this.companies[index];
    }

    setCompany(companies: Company[]) {
        this.companies = companies;
        this.companiesChanged.next(this.companies.slice());
    }

    addCompany(company: Company) {
        this.companies.push(company);
        this.companiesChanged.next(this.companies.slice());
    }
}