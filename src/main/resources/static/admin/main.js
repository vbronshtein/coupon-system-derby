(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies/companies.component */ "./src/app/companies/companies.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _companies_company_edit_company_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./companies/company-edit/company-edit.component */ "./src/app/companies/company-edit/company-edit.component.ts");
/* harmony import */ var _companies_company_start_company_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companies/company-start/company-start.component */ "./src/app/companies/company-start/company-start.component.ts");
/* harmony import */ var _customers_customer_start_customer_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/customer-start/customer-start.component */ "./src/app/customers/customer-start/customer-start.component.ts");
/* harmony import */ var _customers_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customers/customer-edit/customer-edit.component */ "./src/app/customers/customer-edit/customer-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: '/companies', pathMatch: 'full' },
    {
        path: 'companies', component: _companies_companies_component__WEBPACK_IMPORTED_MODULE_2__["CompaniesComponent"], children: [
            { path: '', component: _companies_company_start_company_start_component__WEBPACK_IMPORTED_MODULE_5__["CompanyStartComponent"] },
            { path: 'new', component: _companies_company_edit_company_edit_component__WEBPACK_IMPORTED_MODULE_4__["CompanyEditComponent"] },
            { path: ':id', component: _companies_company_edit_company_edit_component__WEBPACK_IMPORTED_MODULE_4__["CompanyEditComponent"] },
        ]
    },
    {
        path: 'customers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"], children: [
            { path: '', component: _customers_customer_start_customer_start_component__WEBPACK_IMPORTED_MODULE_6__["CustomerStartComponent"] },
            { path: 'new', component: _customers_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_7__["CustomerEditComponent"] },
            { path: ':id', component: _customers_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_7__["CustomerEditComponent"] },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'coupon-sys';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _companies_companies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companies/companies.component */ "./src/app/companies/companies.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _companies_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./companies/company-list/company-list.component */ "./src/app/companies/company-list/company-list.component.ts");
/* harmony import */ var _customers_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customers/customer-list/customer-list.component */ "./src/app/customers/customer-list/customer-list.component.ts");
/* harmony import */ var _companies_company_list_company_item_company_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./companies/company-list/company-item/company-item.component */ "./src/app/companies/company-list/company-item/company-item.component.ts");
/* harmony import */ var _customers_customer_list_customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customers/customer-list/customer-item/customer-item.component */ "./src/app/customers/customer-list/customer-item/customer-item.component.ts");
/* harmony import */ var _companies_company_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./companies/company.service */ "./src/app/companies/company.service.ts");
/* harmony import */ var _companies_company_edit_company_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./companies/company-edit/company-edit.component */ "./src/app/companies/company-edit/company-edit.component.ts");
/* harmony import */ var _companies_company_start_company_start_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./companies/company-start/company-start.component */ "./src/app/companies/company-start/company-start.component.ts");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _customers_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customers/customer-edit/customer-edit.component */ "./src/app/customers/customer-edit/customer-edit.component.ts");
/* harmony import */ var _customers_customer_start_customer_start_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customers/customer-start/customer-start.component */ "./src/app/customers/customer-start/customer-start.component.ts");
/* harmony import */ var _customers_customer_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customers/customer.service */ "./src/app/customers/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _companies_companies_component__WEBPACK_IMPORTED_MODULE_5__["CompaniesComponent"],
                _customers_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _companies_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_9__["CompanyListComponent"],
                _customers_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_10__["CustomerListComponent"],
                _companies_company_list_company_item_company_item_component__WEBPACK_IMPORTED_MODULE_11__["CompanyItemComponent"],
                _customers_customer_list_customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_12__["CustomerItemComponent"],
                _companies_company_edit_company_edit_component__WEBPACK_IMPORTED_MODULE_14__["CompanyEditComponent"],
                _companies_company_start_company_start_component__WEBPACK_IMPORTED_MODULE_15__["CompanyStartComponent"],
                _customers_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_17__["CustomerEditComponent"],
                _customers_customer_start_customer_start_component__WEBPACK_IMPORTED_MODULE_18__["CustomerStartComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [_companies_company_service__WEBPACK_IMPORTED_MODULE_13__["CompanyService"],
                _customers_customer_service__WEBPACK_IMPORTED_MODULE_19__["CustomerService"],
                _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_16__["DataStorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/companies/companies.component.css":
/*!***************************************************!*\
  !*** ./src/app/companies/companies.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/companies/companies.component.html":
/*!****************************************************!*\
  !*** ./src/app/companies/companies.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-company-list></app-company-list>\n  </div>\n  <div class=\"col-md-7\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/companies/companies.component.ts":
/*!**************************************************!*\
  !*** ./src/app/companies/companies.component.ts ***!
  \**************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent() {
    }
    CompaniesComponent.prototype.ngOnInit = function () {
    };
    CompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-companies',
            template: __webpack_require__(/*! ./companies.component.html */ "./src/app/companies/companies.component.html"),
            styles: [__webpack_require__(/*! ./companies.component.css */ "./src/app/companies/companies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompaniesComponent);
    return CompaniesComponent;
}());



/***/ }),

/***/ "./src/app/companies/company-edit/company-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/companies/company-edit/company-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched,\r\ntextarea.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/companies/company-edit/company-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/companies/company-edit/company-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-primary\" \n            type=\"button\" \n            (click)=\"onManage()\" \n            *ngIf=\"editMode\">Manage Company</button>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" \n                  id=\"name\" \n                  class=\"form-control\" \n                  name=\"name\" \n                  ngModel \n                  required \n                  [readonly]=\"editMode\">\n          </div>\n          <div class=\"col-xs-12 form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"text\" \n                  id=\"password\" \n                  class=\"form-control\" \n                  name=\"password\" \n                  ngModel \n                  required \n                  [readonly]=\"!manageMode\">\n          </div>\n          <div class=\"col-xs-12 form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" \n                  id=\"email\" \n                  class=\"form-control\" \n                  name=\"email\" \n                  ngModel \n                  required \n                  [readonly]=\"!manageMode\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid || !manageMode\">{{ editMode ? 'Update' :\n              'Add' }}</button>\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" [disabled]=\"!editMode\">Delete</button>\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\" [disabled]=\"!manageMode\">Clear</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/companies/company-edit/company-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/companies/company-edit/company-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: CompanyEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyEditComponent", function() { return CompanyEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/companies/company.service.ts");
/* harmony import */ var _company_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company.model */ "./src/app/companies/company.model.ts");
/* harmony import */ var src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyEditComponent = /** @class */ (function () {
    function CompanyEditComponent(companyService, dataStorageService, router, route) {
        this.companyService = companyService;
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.route = route;
        this.editMode = false;
        this.manageMode = true;
    }
    CompanyEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.companyService.startedEditing
            .subscribe(function (index) {
            _this.editedItemIndex = index;
            _this.editMode = true;
            _this.editedItem = _this.companyService.getCompany(index);
            _this.companyForm.setValue({
                name: _this.editedItem.name,
                password: _this.editedItem.password,
                email: _this.editedItem.email
            });
            _this.manageMode = false;
        });
    };
    CompanyEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newCompany = new _company_model__WEBPACK_IMPORTED_MODULE_3__["Company"](value.name, value.password, value.email);
        if (this.editMode) {
            this.editedItem.password = newCompany.password;
            this.editedItem.email = newCompany.email;
            this.dataStorageService.updateCompany(this.editedItem);
            this.router.navigate(['../'], { relativeTo: this.route });
        }
        else {
            this.dataStorageService.addCompany(newCompany);
            form.reset();
        }
        this.editMode = false;
    };
    CompanyEditComponent.prototype.onClear = function () {
        this.companyForm.reset();
    };
    CompanyEditComponent.prototype.onManage = function () {
        this.manageMode = true;
    };
    CompanyEditComponent.prototype.onDelete = function () {
        this.dataStorageService.deleteCompany(this.editedItem);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    CompanyEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], CompanyEditComponent.prototype, "companyForm", void 0);
    CompanyEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-edit',
            template: __webpack_require__(/*! ./company-edit.component.html */ "./src/app/companies/company-edit/company-edit.component.html"),
            styles: [__webpack_require__(/*! ./company-edit.component.css */ "./src/app/companies/company-edit/company-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], CompanyEditComponent);
    return CompanyEditComponent;
}());



/***/ }),

/***/ "./src/app/companies/company-list/company-item/company-item.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/companies/company-list/company-item/company-item.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/companies/company-list/company-item/company-item.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/companies/company-list/company-item/company-item.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a\n  style=\"cursor: pointer;\"\n  [routerLink]=\"[index]\"\n  routerLinkActive=\"active\"\n  class=\"list-group-item clearfix\">\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">{{ company.name }}</h4>\n    <p class=\"list-group-item-text\"> Id: {{ company.id }}</p>\n  </div>\n</a>"

/***/ }),

/***/ "./src/app/companies/company-list/company-item/company-item.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/companies/company-list/company-item/company-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CompanyItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyItemComponent", function() { return CompanyItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../company.model */ "./src/app/companies/company.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyItemComponent = /** @class */ (function () {
    function CompanyItemComponent() {
    }
    CompanyItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _company_model__WEBPACK_IMPORTED_MODULE_1__["Company"])
    ], CompanyItemComponent.prototype, "company", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CompanyItemComponent.prototype, "index", void 0);
    CompanyItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-item',
            template: __webpack_require__(/*! ./company-item.component.html */ "./src/app/companies/company-list/company-item/company-item.component.html"),
            styles: [__webpack_require__(/*! ./company-item.component.css */ "./src/app/companies/company-list/company-item/company-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyItemComponent);
    return CompanyItemComponent;
}());



/***/ }),

/***/ "./src/app/companies/company-list/company-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/companies/company-list/company-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/companies/company-list/company-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/companies/company-list/company-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success\" (click)=\"onNewCompany()\">New Company</button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-company-item\n      *ngFor=\"let company of companies; let i = index\"\n      [company]=\"company\"\n      [index]=\"i\"\n      (click)=\"onEditItem(i)\"></app-company-item>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/companies/company-list/company-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/companies/company-list/company-list.component.ts ***!
  \******************************************************************/
/*! exports provided: CompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function() { return CompanyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company.service */ "./src/app/companies/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyListComponent = /** @class */ (function () {
    function CompanyListComponent(companyService, dataStorageService, router, route) {
        this.companyService = companyService;
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.route = route;
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dataStorageService.getCompanies();
        this.companyService.companiesChanged.subscribe(function (companies) {
            _this.companies = companies;
        });
    };
    CompanyListComponent.prototype.onNewCompany = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    CompanyListComponent.prototype.onEditItem = function (index) {
        this.companyService.startedEditing.next(index);
    };
    CompanyListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CompanyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-list',
            template: __webpack_require__(/*! ./company-list.component.html */ "./src/app/companies/company-list/company-list.component.html"),
            styles: [__webpack_require__(/*! ./company-list.component.css */ "./src/app/companies/company-list/company-list.component.css")]
        }),
        __metadata("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"],
            src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CompanyListComponent);
    return CompanyListComponent;
}());



/***/ }),

/***/ "./src/app/companies/company-start/company-start.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/companies/company-start/company-start.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/companies/company-start/company-start.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/companies/company-start/company-start.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Please select a Company!</h3>\n"

/***/ }),

/***/ "./src/app/companies/company-start/company-start.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/companies/company-start/company-start.component.ts ***!
  \********************************************************************/
/*! exports provided: CompanyStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyStartComponent", function() { return CompanyStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyStartComponent = /** @class */ (function () {
    function CompanyStartComponent() {
    }
    CompanyStartComponent.prototype.ngOnInit = function () {
    };
    CompanyStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-start',
            template: __webpack_require__(/*! ./company-start.component.html */ "./src/app/companies/company-start/company-start.component.html"),
            styles: [__webpack_require__(/*! ./company-start.component.css */ "./src/app/companies/company-start/company-start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyStartComponent);
    return CompanyStartComponent;
}());



/***/ }),

/***/ "./src/app/companies/company.model.ts":
/*!********************************************!*\
  !*** ./src/app/companies/company.model.ts ***!
  \********************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company(name, password, email, id, coupons) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.id = id;
        this.coupons = coupons;
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/companies/company.service.ts":
/*!**********************************************!*\
  !*** ./src/app/companies/company.service.ts ***!
  \**********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyService = /** @class */ (function () {
    function CompanyService() {
        this.companiesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    CompanyService.prototype.getCompany = function (index) {
        return this.companies[index];
    };
    CompanyService.prototype.setCompany = function (companies) {
        this.companies = companies;
        this.companiesChanged.next(this.companies.slice());
    };
    CompanyService.prototype.addCompany = function (company) {
        this.companies.push(company);
        this.companiesChanged.next(this.companies.slice());
    };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/customers/customer-edit/customer-edit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/customers/customer-edit/customer-edit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customers/customer-edit/customer-edit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customer-edit/customer-edit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <button class=\"btn btn-primary\" \n              type=\"button\" \n              (click)=\"onManage()\" \n              *ngIf=\"editMode\">Manage Customer</button>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n  \n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 form-group\">\n              <label for=\"custName\">Name</label>\n              <input type=\"text\" \n                    id=\"custName\" \n                    class=\"form-control\" \n                    name=\"custName\" \n                    ngModel \n                    required \n                    [readonly]=\"editMode\">\n            </div>\n            <div class=\"col-xs-12 form-group\">\n              <label for=\"password\">Password</label>\n              <input type=\"text\" \n                    id=\"password\" \n                    class=\"form-control\" \n                    name=\"password\" \n                    ngModel \n                    required \n                    [readonly]=\"!manageMode\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid || !manageMode\">{{ editMode ? 'Update' :\n                'Add' }}</button>\n              <button class=\"btn btn-danger\" type=\"button\" (click)=\"onDelete()\" [disabled]=\"!editMode\">Delete</button>\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\" [disabled]=\"!manageMode\">Clear</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/customers/customer-edit/customer-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-edit/customer-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.model */ "./src/app/customers/customer.model.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer.service */ "./src/app/customers/customer.service.ts");
/* harmony import */ var src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(customerService, dataStorageService, router, route) {
        this.customerService = customerService;
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.route = route;
        this.editMode = false;
        this.manageMode = true;
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.customerService.startedEditing
            .subscribe(function (index) {
            _this.editedItemIndex = index;
            _this.editMode = true;
            _this.editedItem = _this.customerService.getCustomer(index);
            _this.customerForm.setValue({
                custName: _this.editedItem.custName,
                password: _this.editedItem.password
            });
            _this.manageMode = false;
        });
    };
    CustomerEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newCompany = new _customer_model__WEBPACK_IMPORTED_MODULE_2__["Customer"](value.custName, value.password);
        if (this.editMode) {
            this.editedItem.password = newCompany.password;
            this.dataStorageService.updateCustomer(this.editedItem);
            this.router.navigate(['../'], { relativeTo: this.route });
        }
        else {
            this.dataStorageService.addCustomer(newCompany);
        }
        this.editMode = false;
        form.reset();
    };
    CustomerEditComponent.prototype.onClear = function () {
        this.customerForm.reset();
    };
    CustomerEditComponent.prototype.onManage = function () {
        this.manageMode = true;
    };
    CustomerEditComponent.prototype.onDelete = function () {
        this.dataStorageService.deleteCustomer(this.editedItem);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    CustomerEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], CustomerEditComponent.prototype, "customerForm", void 0);
    CustomerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-edit',
            template: __webpack_require__(/*! ./customer-edit.component.html */ "./src/app/customers/customer-edit/customer-edit.component.html"),
            styles: [__webpack_require__(/*! ./customer-edit.component.css */ "./src/app/customers/customer-edit/customer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
            src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-list/customer-item/customer-item.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-item/customer-item.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customers/customer-list/customer-item/customer-item.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-item/customer-item.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a\n  style=\"cursor: pointer;\"\n  [routerLink]=\"[index]\"\n  routerLinkActive=\"active\"\n  class=\"list-group-item clearfix\">\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">{{ customer.custName }}</h4>\n    <p class=\"list-group-item-text\">Id: {{ customer.id }}</p>\n  </div>\n</a>"

/***/ }),

/***/ "./src/app/customers/customer-list/customer-item/customer-item.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-item/customer-item.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerItemComponent", function() { return CustomerItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../customer.model */ "./src/app/customers/customer.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerItemComponent = /** @class */ (function () {
    function CustomerItemComponent() {
    }
    CustomerItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _customer_model__WEBPACK_IMPORTED_MODULE_1__["Customer"])
    ], CustomerItemComponent.prototype, "customer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CustomerItemComponent.prototype, "index", void 0);
    CustomerItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-item',
            template: __webpack_require__(/*! ./customer-item.component.html */ "./src/app/customers/customer-list/customer-item/customer-item.component.html"),
            styles: [__webpack_require__(/*! ./customer-item.component.css */ "./src/app/customers/customer-list/customer-item/customer-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerItemComponent);
    return CustomerItemComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <button class=\"btn btn-success\" (click)=\"onNewCustomer()\">New Customer</button>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <app-customer-item\n        *ngFor=\"let customer of customers; let i = index\"\n        [customer]=\"customer\"\n        [index]=\"i\"\n        (click)=\"onEditItem(i)\"></app-customer-item>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/customers/customer.service.ts");
/* harmony import */ var src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(customerService, dataStorageService, router, route) {
        this.customerService = customerService;
        this.dataStorageService = dataStorageService;
        this.router = router;
        this.route = route;
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dataStorageService.getCustomers();
        this.customerService.customersChanged.subscribe(function (customers) {
            _this.customers = customers;
        });
    };
    CustomerListComponent.prototype.onNewCustomer = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    CustomerListComponent.prototype.onEditItem = function (index) {
        this.customerService.startedEditing.next(index);
    };
    CustomerListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/customers/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customers/customer-list/customer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"],
            src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-start/customer-start.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customers/customer-start/customer-start.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customers/customer-start/customer-start.component.html":
/*!************************************************************************!*\
  !*** ./src/app/customers/customer-start/customer-start.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Please select a Customer!</h3>\n"

/***/ }),

/***/ "./src/app/customers/customer-start/customer-start.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customer-start/customer-start.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomerStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerStartComponent", function() { return CustomerStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerStartComponent = /** @class */ (function () {
    function CustomerStartComponent() {
    }
    CustomerStartComponent.prototype.ngOnInit = function () {
    };
    CustomerStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-start',
            template: __webpack_require__(/*! ./customer-start.component.html */ "./src/app/customers/customer-start/customer-start.component.html"),
            styles: [__webpack_require__(/*! ./customer-start.component.css */ "./src/app/customers/customer-start/customer-start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerStartComponent);
    return CustomerStartComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer.model.ts":
/*!*********************************************!*\
  !*** ./src/app/customers/customer.model.ts ***!
  \*********************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(custName, password, id) {
        this.custName = custName;
        this.password = password;
        this.id = id;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/customers/customer.service.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customer.service.ts ***!
  \***********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this.customersChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    CustomerService.prototype.getCustomer = function (index) {
        return this.customers[index];
    };
    CustomerService.prototype.setCompany = function (customers) {
        this.customers = customers;
        this.customersChanged.next(this.customers.slice());
    };
    CustomerService.prototype.addCompany = function (customer) {
        this.customers.push(customer);
        this.customersChanged.next(this.customers.slice());
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/customers/customers.component.css":
/*!***************************************************!*\
  !*** ./src/app/customers/customers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-customer-list></app-customer-list>\n  </div>\n  <div class=\"col-md-7\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomersComponent = /** @class */ (function () {
    function CustomersComponent() {
    }
    CustomersComponent.prototype.ngOnInit = function () {
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a routerLink=\"/\" class=\"navbar-brand\">Admin Coupon System</a>\n    </div>\n\n    <div class=\"nav navbar-default\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/companies\">Companies</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/customers\">Customers</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _companies_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../companies/company.service */ "./src/app/companies/company.service.ts");
/* harmony import */ var _customers_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customers/customer.service */ "./src/app/customers/customer.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataStorageService = /** @class */ (function () {
    function DataStorageService(http, companyService, customerService) {
        this.http = http;
        this.companyService = companyService;
        this.customerService = customerService;
        this.defaultFailMessage = 'Something doing wrong , Please contact your system administrator';
    }
    DataStorageService.prototype.getCompanies = function () {
        var _this = this;
        return this.http.get("http://localhost:8080/admin/getallcompanies")
            .subscribe(function (resp) {
            var companies = resp.json();
            _this.companyService.setCompany(companies);
        }, function (err) {
            if (err.status == 501) {
                _this.failAlert(err.text());
            }
            else {
                _this.failAlert(_this.defaultFailMessage);
            }
        });
    };
    DataStorageService.prototype.addCompany = function (company) {
        var _this = this;
        return this.http.post("http://localhost:8080/admin/createcompany", company)
            .subscribe(function (resp) {
            if (resp.status == 200) {
                _this.successAlert("Company was created successfully");
            }
            _this.getCompanies();
        }, function (err) {
            if (err.status == 501) {
                _this.failAlert(err.text());
            }
            else {
                _this.failAlert(_this.defaultFailMessage);
            }
        });
    };
    DataStorageService.prototype.updateCompany = function (company) {
        var _this = this;
        return this.http.put("http://localhost:8080/admin/updatecompany", company)
            .subscribe(function (resp) {
            if (resp.status == 200) {
                _this.successAlert("Company was updated successfully");
            }
            _this.getCompanies();
        }, function (err) {
            if (err.status == 501) {
                _this.failAlert(err.text());
            }
            else {
                _this.failAlert(_this.defaultFailMessage);
            }
        });
    };
    DataStorageService.prototype.deleteCompany = function (company) {
        var _this = this;
        return this.http.delete("http://localhost:8080/admin/removecompany/" + company.id)
            .subscribe(function (resp) {
            if (resp.status == 200) {
                _this.successAlert("Company was removed successfully");
            }
            _this.getCompanies();
        }, function (err) {
            if (err.status == 501) {
                _this.failAlert(err.text());
            }
            else {
                _this.failAlert(_this.defaultFailMessage);
            }
        });
    };
    DataStorageService.prototype.getCustomers = function () {
        var _this = this;
        return this.http.get("http://localhost:8080/admin/getallcustomers").subscribe(function (resp) {
            var customers = resp.json();
            _this.customerService.setCompany(customers);
        }, function (err) {
            if (err.status == 501) {
                _this.failAlert(err.text());
            }
            else {
                _this.failAlert(_this.defaultFailMessage);
            }
        });
    };
    DataStorageService.prototype.addCustomer = function (customer) {
        var _this = this;
        return this.http.post("http://localhost:8080/admin/createcustomer", customer)
            .subscribe(function (resp) {
            if (resp.status == 200) {
                _this.successAlert("Customer was created successfully");
            }
            _this.getCustomers();
        }, function (err) {
            if (err.status == 501) {
                _this.failAlert(err.text());
            }
            else {
                _this.failAlert(_this.defaultFailMessage);
            }
        });
    };
    DataStorageService.prototype.updateCustomer = function (customer) {
        var _this = this;
        return this.http.put("http://localhost:8080/admin/updatecustomer", customer)
            .subscribe(function (resp) {
            if (resp.status == 200) {
                _this.successAlert("Customer was updated successfully");
            }
            _this.getCustomers();
        }, function (err) {
            if (err.status == 501) {
                _this.failAlert(err.text());
            }
            else {
                _this.failAlert(_this.defaultFailMessage);
            }
        });
    };
    DataStorageService.prototype.deleteCustomer = function (customer) {
        var _this = this;
        return this.http.delete("http://localhost:8080/admin/removecustomer/" + customer.id)
            .subscribe(function (resp) {
            if (resp.status == 200) {
                _this.successAlert("Customer was removed successfully");
            }
            _this.getCustomers();
        }, function (err) {
            if (err.status == 501) {
                _this.failAlert(err.text());
            }
            else {
                _this.failAlert(_this.defaultFailMessage);
            }
        });
    };
    DataStorageService.prototype.successAlert = function (message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            position: 'center',
            type: 'success',
            title: message,
        });
    };
    DataStorageService.prototype.failAlert = function (message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            type: 'error',
            title: 'Oops...',
            text: message,
        });
    };
    DataStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _companies_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _customers_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\JavaDev\projects\Angular\coupon-sys-admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map