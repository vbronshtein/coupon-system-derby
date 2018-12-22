import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from '../company.model';
import { Subscription } from 'rxjs';
import { CompanyService } from '../company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit, OnDestroy {
  companies: Company[];
  subscription: Subscription;

  constructor(private companyService: CompanyService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.subscription = this.dataStorageService.getCompanies();
    this.companyService.companiesChanged.subscribe(
      (companies: Company[]) => {
        this.companies = companies;
      }
    );
  }

  onNewCompany() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEditItem(index: number) {
    this.companyService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
