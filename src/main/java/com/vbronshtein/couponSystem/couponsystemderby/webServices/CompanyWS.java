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

import java.sql.Date;
import java.util.List;

@RestController
@CrossOrigin("*")
public class CompanyWS {

    @RequestMapping(value = "/company/createcoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity addCoupon(@RequestBody Coupon c) {
        try {
            CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                    ClientType.COMPANY);
            companyFacade.createCoupon(c);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }

    }

    // void removeCoupon(Coupon coupon)
    // Why not by Id in URL
    @RequestMapping(value = "/company/removecoupon/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity removeCoupon(@PathVariable("id") long id) {
        try {
            CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                    ClientType.COMPANY);
            companyFacade.removeCoupon(id);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body("Delete Succedd");
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // void updateCoupon(Coupon coupon)
    @RequestMapping(value = "/company/updatecoupon", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity updateCoupon(@RequestBody Coupon c) {
        try {
            CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                    ClientType.COMPANY);
            companyFacade.updateCoupon(c);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(c);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }

    }

    // getCoupon(long couponId)
    @RequestMapping(value = "/company/getcoupon/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getCoupon(@PathVariable("id") long id) {
        try {
            CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                    ClientType.COMPANY);
            Coupon coupon = companyFacade.getCoupon(id);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupon);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // Collection<Coupon> getAllCoupons()
//    @RequestMapping(value = "/company/getallcoupon", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//    public List<Coupon> getCoupons() throws CouponSystemException {
//        CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
//                ClientType.COMPANY);
//        List<Coupon> result = (List<Coupon>) companyFacade.getAllCoupons();
//        return result;
//    }

    @RequestMapping(value = "/company/getallcoupon", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getCoupons() {
        try {
            CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                    ClientType.COMPANY);
            List<Coupon> coupons = (List<Coupon>) companyFacade.getAllCoupons();
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
//        return result;
    }

    // Collection<Coupon> getCouponByType(CouponType couponType)
    @RequestMapping(value = "/company/getcouponbytype/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getCouponByType(@PathVariable("type") CouponType type) {
        try {
            CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                    ClientType.COMPANY);
            List<Coupon> coupons = (List<Coupon>) companyFacade.getCouponByType(type);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }

    }

    // Collection<Coupon> getCouponUptoPrice(double price)
    @RequestMapping(value = "/company/getcouponuptoprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getCouponUptoPrice(@PathVariable("price") double price) {
        try {
            CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                    ClientType.COMPANY);
            List<Coupon> coupons = (List<Coupon>) companyFacade.getCouponUptoPrice(price);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }

    // Collection<Coupon> getCouponUpToDate(Date date)
    @RequestMapping(value = "/company/getcouponuptodate/{date}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseEntity getCouponUpToDate(@PathVariable("date") Date date) {
        try {
            CompanyFacade companyFacade = (CompanyFacade) CouponSystem.getInstance().login("Osem", "1236",
                    ClientType.COMPANY);
            List<Coupon> coupons = (List<Coupon>) companyFacade.getCouponUpToDate(date);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(coupons);
        } catch (CouponSystemException e) {
            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).contentType(MediaType.TEXT_PLAIN)
                    .body(e.getMessage());
        }
    }
}
