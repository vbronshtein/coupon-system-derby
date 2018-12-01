package com.vbronshtein.couponSystem.couponsystemderby.couponSys;


import com.vbronshtein.couponSystem.couponsystemderby.connectionPool.ConnectionPool;
import com.vbronshtein.couponSystem.couponsystemderby.daoDb.CompanyDbDao;
import com.vbronshtein.couponSystem.couponsystemderby.daoDb.CustomerDbDao;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;
import com.vbronshtein.couponSystem.couponsystemderby.facade.AdminFacade;
import com.vbronshtein.couponSystem.couponsystemderby.facade.CompanyFacade;
import com.vbronshtein.couponSystem.couponsystemderby.facade.CouponClientFacade;
import com.vbronshtein.couponSystem.couponsystemderby.facade.CustomerFacade;
import com.vbronshtein.couponSystem.couponsystemderby.jobs.DailyCouponExparationTask;

/**
 * Coupon System main class ( Singleton )
 *
 * 1.Perform logins to all facades 2.Init DayliExparation task
 *
 * @author vbronshtein
 *
 */
public class CouponSystem {

    private CompanyDbDao companyDbDao;
    private CustomerDbDao customerDbDao;

    private static CouponSystem instance;

    DailyCouponExparationTask dailyExpTask;

    // CTOR
    private CouponSystem() {
        initDao();
        // initDailyThread();
    }

    public static CouponSystem getInstance() {
        if (instance == null) {
            instance = new CouponSystem();
        }
        return instance;
    }


    /**
     * Login method ,return facade after login
     *
     * @param name
     *            Admin/Company/Customer name
     * @param password
     *            Password
     * @param type
     *            User Type : Admin/Company/Customer
     * @return facade Admin, Company or Customer
     * @throws com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException
     */
//    public CouponClientFacade login(String name, String password, ClientType type) throws CouponSystemException {
//        switch (type) {
//            case ADMIN:
//                if (name.equals("admin") && password.equals("1234")) {
//                    return new AdminFacade();
//                } else {
//                    throw new CouponSystemException("Incorrect username or password");
//                }
//            case COMPANY:
//                if (companyDbDao.login(name, password)) {
//                    return new CompanyFacade(name);
//                } else {
//                    throw new CouponSystemException("Incorrect username or password");
//                }
//            case CUSTOMER:
//                if (customerDbDao.login(name, password)) {
//                    return new CustomerFacade(name);
//                } else {
//                    throw new CouponSystemException("Incorrect username or password");
//                }
//
//            default:
//                return null;
//        }
//
//    }

    public CouponClientFacade login(String name, String password, ClientType type) throws CouponSystemException {
        switch (type) {
            case ADMIN:
                if (name.equals("admin") && password.equals("1234")) {
                    return new AdminFacade();
                } else {
                    return null;
                }
            case COMPANY:
                if (companyDbDao.login(name, password)) {
                    return new CompanyFacade(name);
                } else {
                    return null;
                }
            case CUSTOMER:
                if (customerDbDao.login(name, password)) {
                    return new CustomerFacade(name);
                } else {
                    return null;
                }

            default:
                return null;
        }

    }

    /**
     * Shutdown all threads and close all SQL connections
     *
     * @throws CouponSystemException
     */
    public void shutdown() throws CouponSystemException {
        ConnectionPool pool = ConnectionPool.getInstance();

        // dailyExpTask.stopTask();
        pool.closeAllConnection();

    }

    // init Dao for login to facades
    private void initDao() {
        companyDbDao = new CompanyDbDao();
        customerDbDao = new CustomerDbDao();
    }

    // init Daily thread
    // private void initDailyThread() {
    //
    // dailyExpTask = new DailyCouponExparationTask();
    // Thread dailyThread = new Thread(dailyExpTask, "dailyExpired");
    // dailyThread.start();
    //
    // }
}
