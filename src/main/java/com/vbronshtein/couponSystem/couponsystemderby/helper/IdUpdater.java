package com.vbronshtein.couponSystem.couponsystemderby.helper;


import com.vbronshtein.couponSystem.couponsystemderby.beans.Company;
import com.vbronshtein.couponSystem.couponsystemderby.beans.Coupon;
import com.vbronshtein.couponSystem.couponsystemderby.beans.Customer;
import com.vbronshtein.couponSystem.couponsystemderby.daoDb.CompanyDbDao;
import com.vbronshtein.couponSystem.couponsystemderby.daoDb.CustomerDbDao;
import com.vbronshtein.couponSystem.couponsystemderby.daoDb.GlobalCouponDbDao;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;

/**
 * Phase 1 helper , was created for fix dessign issue of creating new Objects (
 * Companies/Customers/Coupons ) without IDs , ID was generated automaticly by
 * DB Methods of this class update object ID fields from DB records
 *
 * @author vbronshtein
 *
 */
public class IdUpdater {
    CompanyDbDao compDao = new CompanyDbDao();
    CustomerDbDao customerDao = new CustomerDbDao();
    GlobalCouponDbDao couponDao = new GlobalCouponDbDao();

    /**
     * Method get Company and update ID field according to read ID from DataBase
     *
     * @param company
     * @throws CouponSystemException
     */
    public void updateCompanyId(Company company) throws CouponSystemException {
        long id = compDao.getCompanyByName(company.getName()).getId();
        company.setId(id);
    }

    /**
     * Method get Customer and update ID field according to read ID from DataBase
     *
     * @param customer
     * @throws CouponSystemException
     */
    public void updateCustomerId(Customer customer) throws CouponSystemException {
        long id = customerDao.getCustomerByName(customer.getCustName()).getId();
        customer.setId(id);
    }

    /**
     * Method get Coupon and update ID field according to read ID from DataBase
     *
     * @param coupon  Coupon
     * @throws CouponSystemException
     */
    public void updateCouponID(Coupon coupon) throws CouponSystemException {
        long id = couponDao.getCouponByTitle(coupon.getTitle()).getId();
        coupon.setId(id);
    }

}
