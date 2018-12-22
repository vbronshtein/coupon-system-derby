import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Subscription } from 'rxjs';
import { Company } from '../company.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') companyForm: NgForm;
  editMode = false;
  manageMode = true;
  subscription: Subscription;
  editedItemIndex: number;
  editedItem: Company;

  constructor(private companyService: CompanyService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.companyService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.companyService.getCompany(index);
          this.companyForm.setValue({
            name: this.editedItem.name,
            password: this.editedItem.password,
            email: this.editedItem.email
          });
          this.manageMode = false;
        }
      );

  }


  onSubmit(form: NgForm) {
    const value = form.value;
    const newCompany = new Company(value.name, value.password, value.email);
    if (this.editMode) {
      this.editedItem.password = newCompany.password;
      this.editedItem.email = newCompany.email;
      this.dataStorageService.updateCompany(this.editedItem);
      this.router.navigate(['../'], { relativeTo: this.route });
    } else {
      this.dataStorageService.addCompany(newCompany);
      form.reset();
    }
    this.editMode = false;
    
  }

  onClear() {
    this.companyForm.reset();
  }

  onManage() {
    this.manageMode = true;
  }

  onDelete() {
    this.dataStorageService.deleteCompany(this.editedItem);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
