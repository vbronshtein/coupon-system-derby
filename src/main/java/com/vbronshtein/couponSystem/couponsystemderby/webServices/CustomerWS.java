package com.vbronshtein.couponSystem.couponsystemderby.webServices;


import com.vbronshtein.couponSystem.couponsystemderby.beans.Coupon;
import com.vbronshtein.couponSystem.couponsystemderby.beans.CouponType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.ClientType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.CouponSystem;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;
import com.vbronshtein.couponSystem.couponsystemderby.facade.CompanyFacade;
import com.vbronshtein.couponSystem.couponsystemderby.facade.CustomerFacade;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Customer WebaService class for Customer REST HTTP requests
 */
@RestController
@CrossOrigin("*")
public class CustomerWS {

    /**
     * WebService for purchase coupone
     * @param c
     * @param request
     * @return
     */
    @RequestMapping(value = "/customer/purchasecoupon", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity purchaseCoupon(@RequestBody Coupon c, HttpServletRequest request) {
        try {
            CustomerFacade customerFacade = getFacade(request);
            customerFacade.purchaseCoupon(c);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    /**
     * WebService for get all coupons list
     * @param request
     * @return
     */
    @RequestMapping(value = "/customer/getallcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getAllCoupons(HttpServletRequest request) {
        try {
            CustomerFacade customerFacade = getFacade(request);
            List<Coupon> coupons = (List<Coupon>) customerFacade.getAllCoupons();
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    /**
     * WebService for get all purchased coupons
     * @param request
     * @return
     */
    @RequestMapping(value = "/customer/getallpurchesedcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getAllPurchesedCoupons(HttpServletRequest request) {
        try {
            CustomerFacade customerFacade = getFacade(request);
            List<Coupon> coupons = (List<Coupon>) customerFacade.getAllPurchesedCoupons();
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    /**
     * WebService for get all purchased coupons by type
     * @param type
     * @param request
     * @return
     */
    @RequestMapping(value = "/customer/getallpurchasedcouponsbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getAllPurchasedCouponsByType(@PathVariable("type") CouponType type, HttpServletRequest request ) {
        try {
            CustomerFacade customerFacade = getFacade(request);
            List<Coupon> coupons = (List<Coupon>) customerFacade.getAllPurchasedCouponsByType(type);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    /**
     * WebService for get all purchased coupons up to price
     * @param price
     * @param request
     * @return
     */
    @RequestMapping(value = "/customer/getallpurchasedcouponsuptoprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getAllPurchasedCouponsUpToPrice(@PathVariable("price") double price, HttpServletRequest request) {
        try {
            CustomerFacade customerFacade = getFacade(request);
            List<Coupon> coupons = (List<Coupon>) customerFacade.getAllPurchasedCouponsUpToPrice(price);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }


    /**
     * Methods for read facade from session
     * @param request
     * @return
     */
    private CustomerFacade getFacade(HttpServletRequest request) {
//        CustomerFacade cf = null;
//        try {
//            cf = (CustomerFacade) CouponSystem.getInstance().login("Yossi", "12346", ClientType.CUSTOMER);
//        } catch (CouponSystemException e) {
//            e.printStackTrace();
//        }
        CustomerFacade cf = (CustomerFacade) request.getSession().getAttribute("facade");
        return cf;
    }
}

