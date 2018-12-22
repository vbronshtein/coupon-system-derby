package com.vbronshtein.couponSystem.couponsystemderby.webServices;

import com.vbronshtein.couponSystem.couponsystemderby.beans.Coupon;
import com.vbronshtein.couponSystem.couponsystemderby.beans.CouponType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.ClientType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.CouponSystem;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;
import com.vbronshtein.couponSystem.couponsystemderby.facade.CompanyFacade;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.sql.Date;
import java.util.List;

/**
 * Company WebaService class for Company REST HTTP requests
 */
@RestController
@CrossOrigin("*")
public class CompanyWS {


    /**
     * WebService for create new coupon
     * @param c
     * @param request
     * @return
     */
    @RequestMapping(value = "/company/createcoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity addCoupon(@RequestBody Coupon c, HttpServletRequest request) {
        try {
            CompanyFacade companyFacade = getFacade(request);
            companyFacade.createCoupon(c);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }

    }

    /**
     * WebService for remove coupon
     * @param id
     * @param request
     * @return
     */
    @RequestMapping(value = "/company/removecoupon/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity removeCoupon(@PathVariable("id") long id, HttpServletRequest request) {
        try {
            CompanyFacade companyFacade = getFacade(request);
            companyFacade.removeCoupon(id);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body("Delete Succedd");
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    /**
     * WebService for update coupon
     * @param c
     * @param request
     * @return
     */
    @RequestMapping(value = "/company/updatecoupon", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity updateCoupon(@RequestBody Coupon c, HttpServletRequest request) {
        try {
            CompanyFacade companyFacade = getFacade(request);
            companyFacade.updateCoupon(c);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }

    }

    /**
     * WebService for get coupon
     * @param id
     * @param request
     * @return
     */
    @RequestMapping(value = "/company/getcoupon/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getCoupon(@PathVariable("id") long id, HttpServletRequest request) {
        try {
            CompanyFacade companyFacade = getFacade(request);
            Coupon coupon = companyFacade.getCoupon(id);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupon);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    /**
     * WebService for get all coupons
     * @param request
     * @return
     */
    @RequestMapping(value = "/company/getallcoupon", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getCoupons(HttpServletRequest request) {
        try {
            CompanyFacade companyFacade = getFacade(request);
            List<Coupon> coupons = (List<Coupon>) companyFacade.getAllCoupons();
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }


    /**
     * WebService for get coupons by type
     * @param type
     * @param request
     * @return
     */
    @RequestMapping(value = "/company/getcouponbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getCouponByType(@PathVariable("type") CouponType type, HttpServletRequest request) {
        try {
            CompanyFacade companyFacade = getFacade(request);
            List<Coupon> coupons = (List<Coupon>) companyFacade.getCouponByType(type);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }

    }

    /**
     * WebService for get coupons by price
     * @param price
     * @param request
     * @return
     */
    @RequestMapping(value = "/company/getcouponuptoprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getCouponUptoPrice(@PathVariable("price") double price, HttpServletRequest request) {
        try {
            CompanyFacade companyFacade = getFacade(request);
            List<Coupon> coupons = (List<Coupon>) companyFacade.getCouponUptoPrice(price);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    /**
     * WebService for  get coupons by date
     * @param date
     * @param request
     * @return
     */
    @RequestMapping(value = "/company/getcouponuptodate/{date}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getCouponUpToDate(@PathVariable("date") Date date, HttpServletRequest request) {
        try {
            CompanyFacade companyFacade = getFacade(request);
            List<Coupon> coupons = (List<Coupon>) companyFacade.getCouponUpToDate(date);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    /**
     * Method for read facede from session
     * @param request
     * @return
     */
    private CompanyFacade getFacade(HttpServletRequest request) {
//        CompanyFacade cf = null;
//        try {
//            cf = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236", ClientType.COMPANY);
//        } catch (CouponSystemException e) {
//            e.printStackTrace();
//        }
        CompanyFacade cf = (CompanyFacade) request.getSession().getAttribute("facade");
        return cf;
    }
}
