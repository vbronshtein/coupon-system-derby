package com.vbronshtein.couponSystem.couponsystemderby.webServices;

import com.vbronshtein.couponSystem.couponsystemderby.beans.Coupon;
import com.vbronshtein.couponSystem.couponsystemderby.beans.CouponType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.ClientType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.CouponSystem;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;
import com.vbronshtein.couponSystem.couponsystemderby.facade.CompanyFacade;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@CrossOrigin("*")
public class CompanyWS {

    @RequestMapping(value = "/company/createcoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void addCoupon(@RequestBody Coupon c) throws CouponSystemException {
        CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                ClientType.COMPANY);
        companyFacade.createCoupon(c);
    }

    // void removeCoupon(Coupon coupon)
    // Why not by Id in URL
    @RequestMapping(value = "/company/removecoupon/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void removeCoupon(@PathVariable("id") long id) throws CouponSystemException {
        CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                ClientType.COMPANY);
        companyFacade.removeCoupon(id);
    }

    // void updateCoupon(Coupon coupon)
    @RequestMapping(value = "/company/updatecoupon", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public void updateCoupon(@RequestBody Coupon c) throws CouponSystemException {
        CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                ClientType.COMPANY);
        companyFacade.updateCoupon(c);

    }

    // getCoupon(long couponId)
    @RequestMapping(value = "/company/getcoupon/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Coupon getCoupon(@PathVariable("id") long id) throws CouponSystemException {
        CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                ClientType.COMPANY);
        return companyFacade.getCoupon(id);
    }

    // Collection<Coupon> getAllCoupons()
    @RequestMapping(value = "/company/getallcoupon", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Coupon> getCoupons() throws CouponSystemException {
        CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                ClientType.COMPANY);
        List<Coupon> result = (List<Coupon>) companyFacade.getAllCoupons();
        return result;
    }

    // Collection<Coupon> getCouponByType(CouponType couponType)
    @RequestMapping(value = "/company/getcouponbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Coupon> getCouponByType(@PathVariable("type") CouponType type) throws CouponSystemException {
        CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                ClientType.COMPANY);
        return (List<Coupon>) companyFacade.getCouponByType(type);

    }

    // Collection<Coupon> getCouponUptoPrice(double price)
    @RequestMapping(value = "/company/getcouponuptoprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Coupon> getCouponUptoPrice(@PathVariable("price") double price) throws CouponSystemException {
        CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                ClientType.COMPANY);
        return (List<Coupon>) companyFacade.getCouponUptoPrice(price);
    }

    // Collection<Coupon> getCouponUpToDate(Date date)
    @RequestMapping(value = "/company/getcouponuptodate/{date}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Coupon> getCouponUpToDate(@PathVariable("date") Date date) throws CouponSystemException {
        CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                ClientType.COMPANY);
        return (List<Coupon>) companyFacade.getCouponUpToDate(date);
    }
}
