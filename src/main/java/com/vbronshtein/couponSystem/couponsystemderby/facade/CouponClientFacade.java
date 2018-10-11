package com.vbronshtein.couponSystem.couponsystemderby.facade;

/**
 * Login interface for Facades
 * Will be not in use on current stage
 *
 * @author vbronshtein
 *
 */
public interface CouponClientFacade {
    CouponClientFacade login(String name, String password, String clientType);
}
