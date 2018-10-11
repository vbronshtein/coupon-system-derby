package com.vbronshtein.couponSystem.couponsystemderby.webServices;


import com.vbronshtein.couponSystem.couponsystemderby.beans.Company;
import com.vbronshtein.couponSystem.couponsystemderby.beans.Customer;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.ClientType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.CouponSystem;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;
import com.vbronshtein.couponSystem.couponsystemderby.facade.AdminFacade;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdminWS {

    // void createCompany(Company company)
    @RequestMapping(value = "/admin/createcompany", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public void createCompany(@RequestBody Company comp) throws CouponSystemException {
        AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
        adminFacade.createCompany(comp);
    }

    // void removeCompany(Company company)
    @RequestMapping(value = "/admin/removecompany/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void removeCompany(@PathVariable("id") long id) throws CouponSystemException {
        AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
        adminFacade.removeCompany(id);

    }

    // void updateCompany(Company company)
    @RequestMapping(value = "/admin/updatecompany", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public void updateCompany(@RequestBody Company comp) throws CouponSystemException {
        AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
        adminFacade.updateCompany(comp);
    }

    // Collection<Company> getAllCompanies()
    @RequestMapping(value = "/admin/getallcompanies", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Company> getAllCompanies() throws CouponSystemException {
        AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
        return (List<Company>) adminFacade.getAllCompanies();
    }

    // Company getCompany(long id)
    @RequestMapping(value = "/admin/getcompany/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Company getCompany(@PathVariable("id") long id) throws CouponSystemException {
        AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
        Company company = adminFacade.getCompany(id);
        return company;
    }

    // createCustomer(Customer customer)
    @RequestMapping(value = "/admin/createcustomer", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public void createCustomer(@RequestBody Customer customer) throws CouponSystemException {
        AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
        adminFacade.createCustomer(customer);
    }

    // removeCustomer(Customer customer)
    @RequestMapping(value = "/admin/removecustomer/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void removeCustomer(@PathVariable("id") long id) throws CouponSystemException {
        AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
        adminFacade.removeCustomer(id);
    }

    // updateCustomer(Customer customer)
    @RequestMapping(value = "/admin/updatecustomer", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public void updateCustomer(@RequestBody Customer customer) throws CouponSystemException {
        AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
        adminFacade.updateCustomer(customer);
    }

    // Collection<Customer> getAllCustomers()
    @RequestMapping(value = "/admin/getallcustomers", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Customer> getAllCustomers() throws CouponSystemException {
        AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
        return (List<Customer>) adminFacade.getAllCustomers();
    }

    // Customer getCustomer(long id)
    @RequestMapping(value = "/admin/getcustomer/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Customer getCustomer(@PathVariable("id") long id) throws CouponSystemException {
        AdminFacade adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
        return adminFacade.getCustomer(id);
    }
}
