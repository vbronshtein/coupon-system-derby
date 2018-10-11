package com.vbronshtein.couponSystem.couponsystemderby.webServices;


import com.vbronshtein.couponSystem.couponsystemderby.beans.Coupon;
import com.vbronshtein.couponSystem.couponsystemderby.beans.CouponType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.ClientType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.CouponSystem;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;
import com.vbronshtein.couponSystem.couponsystemderby.facade.CustomerFacade;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerWS {

    // void purchaseCoupon(Coupon coupon)
    @RequestMapping(value = "/customer/purchasecoupon", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public void purchaseCoupon(@RequestBody Coupon c) throws CouponSystemException {
        CustomerFacade customerFacade = (CustomerFacade) CouponSystem.getInstance().login("Yossi", "12346",
                ClientType.CUSTOMER);
        customerFacade.purchaseCoupon(c);
    }

    // Collection<Coupon> getAllPurchesedCoupons()
    @RequestMapping(value = "/customer/getallpurchesedcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Coupon> getAllPurchesedCoupons() throws CouponSystemException {
        CustomerFacade customerFacade = (CustomerFacade) CouponSystem.getInstance().login("Yossi", "12346",
                ClientType.CUSTOMER);
        return (List<Coupon>) customerFacade.getAllPurchesedCoupons();
    }

    // Collection<Coupon> getAllPurchasedCouponsByType(CouponType couponType)
    @RequestMapping(value = "/customer/getallpurchasedcouponsbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Coupon> getAllPurchasedCouponsByType(@PathVariable("type") CouponType type)
            throws CouponSystemException {
        CustomerFacade customerFacade = (CustomerFacade) CouponSystem.getInstance().login("Yossi", "12346",
                ClientType.CUSTOMER);
        return (List<Coupon>) customerFacade.getAllPurchasedCouponsByType(type);
    }

    // Collection<Coupon> getAllPurchasedCouponsUpToPrice(double price)
    @RequestMapping(value = "/customer/getallpurchasedcouponsuptoprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Coupon> getAllPurchasedCouponsUpToPrice(@PathVariable("price") double price)
            throws CouponSystemException {
        CustomerFacade customerFacade = (CustomerFacade) CouponSystem.getInstance().login("Yossi", "12346",
                ClientType.CUSTOMER);
        return (List<Coupon>) customerFacade.getAllPurchasedCouponsUpToPrice(price);
    }
}

