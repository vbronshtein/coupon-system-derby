package com.vbronshtein.couponSystem.couponsystemderby.dao;

import com.vbronshtein.couponSystem.couponsystemderby.beans.Company;
import com.vbronshtein.couponSystem.couponsystemderby.beans.Coupon;
import com.vbronshtein.couponSystem.couponsystemderby.beans.CouponType;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;

import java.util.Collection;

/**
 * Coupon Dao interface Define "must implement" methods
 *
 * @author vbronshtein
 *
 */
public interface CouponDao {
    /**
     * Create new coupon record on DataBase
     *
     * @param coupon
     *            Coupon for create on DataBase
     * @throws CouponSystemException
     */
    void create(Company company, Coupon coupon) throws CouponSystemException;

    /**
     * Read Company coupon from DataBase
     *
     * @param compId
     *            Company Id
     * @param couponId
     *            Coupon Id
     * @return Coupon from DataBase
     * @throws CouponSystemException
     */
    Coupon read(long compId, long couponId) throws CouponSystemException;

    /**
     * Update Company coupon in DataBase
     *
     * @param company
     *            Company
     * @param coupon
     *            Coupon
     * @throws CouponSystemException
     */
    void update(Company company, Coupon coupon) throws CouponSystemException;

    /**
     * Delete Company coupon from DataBase
     *
     * @param company
     *            Company
     * @param id
     *            id
     * @throws CouponSystemException
     */
    void delete(Company company, long id) throws CouponSystemException;

    /**
     * Get all Company coupons from DataBase
     *
     * @return List of Coupons
     * @throws CouponSystemException
     */
    Collection<Coupon> getAllCoupon(Company company) throws CouponSystemException;

    /**
     * Get company coupons by specific type
     *
     * @param company
     *            Comapny
     * @param type
     *            Coupon Type : Travel , Food , Health ...
     * @return List of Coupons
     * @throws CouponSystemException
     */
    Collection<Coupon> getCouponByType(Company company, CouponType type) throws CouponSystemException;


}
