package com.vbronshtein.couponSystem.couponsystemderby.connectionPool;

/**
 * Class contain configuration of DataBase ( URL and Number of maximum
 * connections ) *Configured for Derby data base
 *
 * @author vbronshtein
 *
 */
public final class DataBaseConfig {

    public final static String DB_URL;
    public final static int DB_MAX_CONNECTIONS;

    static {
        DB_MAX_CONNECTIONS = 10;
        DB_URL = "jdbc:derby://localhost:1527/coupon_sys_db";
    }

}

