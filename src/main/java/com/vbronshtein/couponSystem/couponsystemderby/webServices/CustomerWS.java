package com.vbronshtein.couponSystem.couponsystemderby.webServices;


import com.vbronshtein.couponSystem.couponsystemderby.beans.Coupon;
import com.vbronshtein.couponSystem.couponsystemderby.beans.CouponType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.ClientType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.CouponSystem;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;
import com.vbronshtein.couponSystem.couponsystemderby.facade.CustomerFacade;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CustomerWS {

    // void purchaseCoupon(Coupon coupon)
    @RequestMapping(value = "/customer/purchasecoupon", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity purchaseCoupon(@RequestBody Coupon c) {
        try {
            CustomerFacade customerFacade = (CustomerFacade) CouponSystem.getInstance().login("Yossi", "12346",
                    ClientType.CUSTOMER);
            customerFacade.purchaseCoupon(c);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // Collection<Coupon> getAllCoupons()
    @RequestMapping(value = "/customer/getallcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getAllCoupons() {
        try {
            CustomerFacade customerFacade = (CustomerFacade) CouponSystem.getInstance().login("Yossi", "12346",
                    ClientType.CUSTOMER);
            List<Coupon> coupons = (List<Coupon>) customerFacade.getAllCoupons();
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // Collection<Coupon> getAllPurchesedCoupons()
    @RequestMapping(value = "/customer/getallpurchesedcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getAllPurchesedCoupons() {
        try {
            CustomerFacade customerFacade = (CustomerFacade) CouponSystem.getInstance().login("Yossi", "12346",
                    ClientType.CUSTOMER);
            List<Coupon> coupons = (List<Coupon>) customerFacade.getAllPurchesedCoupons();
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // Collection<Coupon> getAllPurchasedCouponsByType(CouponType couponType)
    @RequestMapping(value = "/customer/getallpurchasedcouponsbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getAllPurchasedCouponsByType(@PathVariable("type") CouponType type) {
        try {
            CustomerFacade customerFacade = (CustomerFacade) CouponSystem.getInstance().login("Yossi", "12346",
                    ClientType.CUSTOMER);
            List<Coupon> coupons = (List<Coupon>) customerFacade.getAllPurchasedCouponsByType(type);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // Collection<Coupon> getAllPurchasedCouponsUpToPrice(double price)
    @RequestMapping(value = "/customer/getallpurchasedcouponsuptoprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getAllPurchasedCouponsUpToPrice(@PathVariable("price") double price) {
        try {
            CustomerFacade customerFacade = (CustomerFacade) CouponSystem.getInstance().login("Yossi", "12346",
                    ClientType.CUSTOMER);
            List<Coupon> coupons = (List<Coupon>) customerFacade.getAllPurchasedCouponsUpToPrice(price);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }
}

