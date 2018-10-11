package com.vbronshtein.couponSystem.couponsystemderby.dao;


import com.vbronshtein.couponSystem.couponsystemderby.beans.Coupon;
import com.vbronshtein.couponSystem.couponsystemderby.beans.Customer;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;

/**
 * Customer Coupon Dao interface Define "must implement" methods
 *
 * @author vbronshtein
 *
 */
public interface CustomerCouponDao {

    /**
     * Create new Customer coupon in DataBase
     *
     * @param customer
     *            Customer
     * @param coupon
     *            Coupon
     * @throws CouponSystemException
     */
    void create(Customer customer, Coupon coupon) throws CouponSystemException;

    /**
     * Delete Customer coupon from DataBase
     *
     * @param customer
     *            Customer
     * @param coupon
     *            Coupon
     * @throws CouponSystemException
     */
    void delete(Customer customer, Coupon coupon) throws CouponSystemException;

}
