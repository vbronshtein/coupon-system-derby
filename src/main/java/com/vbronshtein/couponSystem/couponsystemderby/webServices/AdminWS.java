package com.vbronshtein.couponSystem.couponsystemderby.webServices;


import com.vbronshtein.couponSystem.couponsystemderby.beans.Company;
import com.vbronshtein.couponSystem.couponsystemderby.beans.Customer;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.ClientType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.CouponSystem;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;
import com.vbronshtein.couponSystem.couponsystemderby.facade.AdminFacade;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class AdminWS {

    // void createCompany(Company company)
    @RequestMapping(value = "/admin/createcompany", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity createCompany(@RequestBody Company comp) {
        try {
            AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
            adminFacade.createCompany(comp);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(comp);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // void removeCompany(Company company)
    @RequestMapping(value = "/admin/removecompany/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity removeCompany(@PathVariable("id") long id) {
        try {
            AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
            adminFacade.removeCompany(id);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(id);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }

    }

    // void updateCompany(Company company)
    @RequestMapping(value = "/admin/updatecompany", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity updateCompany(@RequestBody Company comp) {
        try {
            AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
            adminFacade.updateCompany(comp);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(comp);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // Collection<Company> getAllCompanies()
    @RequestMapping(value = "/admin/getallcompanies", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getAllCompanies() {
        try {
            AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
            List<Company> companies = (List<Company>) adminFacade.getAllCompanies();
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(companies);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // Company getCompany(long id)
    @RequestMapping(value = "/admin/getcompany/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getCompany(@PathVariable("id") long id) {
        try {
            AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
            Company company = adminFacade.getCompany(id);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(company);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // createCustomer(Customer customer)
    @RequestMapping(value = "/admin/createcustomer", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity createCustomer(@RequestBody Customer customer) {
        try {
            AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
            adminFacade.createCustomer(customer);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(customer);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // removeCustomer(Customer customer)
    @RequestMapping(value = "/admin/removecustomer/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity removeCustomer(@PathVariable("id") long id) {
        try {
            AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
            adminFacade.removeCustomer(id);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(id);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // updateCustomer(Customer customer)
    @RequestMapping(value = "/admin/updatecustomer", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity updateCustomer(@RequestBody Customer customer) {
        try {
            AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
            adminFacade.updateCustomer(customer);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(customer);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // Collection<Customer> getAllCustomers()
    @RequestMapping(value = "/admin/getallcustomers", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getAllCustomers() {
        try {
            AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
            List<Customer> customers = (List<Customer>) adminFacade.getAllCustomers();
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(customers);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // Customer getCustomer(long id)
    @RequestMapping(value = "/admin/getcustomer/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getCustomer(@PathVariable("id") long id) {
        try {
            AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
            Customer customer = adminFacade.getCustomer(id);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(customer);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }
}
