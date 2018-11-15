package com.vbronshtein.couponSystem.couponsystemderby.daoDb;


import com.vbronshtein.couponSystem.couponsystemderby.beans.Company;
import com.vbronshtein.couponSystem.couponsystemderby.beans.Coupon;
import com.vbronshtein.couponSystem.couponsystemderby.beans.CouponType;
import com.vbronshtein.couponSystem.couponsystemderby.connectionPool.ConnectionPool;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;

import javax.validation.constraints.Max;
import java.sql.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Global Actions on Coupon table ( without dependencies to Companies and
 * Customers )
 *
 * @author vbronshtein
 */
public class GlobalCouponDbDao {
    private ConnectionPool pool;

    /**
     * Default Constructor, Also assigning of Connection pool Instance to local
     * variable
     */
    public GlobalCouponDbDao() {
        super();
        this.pool = ConnectionPool.getInstance();
    }

    public Collection<Coupon> getAllCoupons() throws CouponSystemException {
        Connection connection = pool.getConnection();

        try {
            Collection<Coupon> coupons = new ArrayList<>();
            String sql = String.format(SQL_QUERY.SQL_Get_All_Coupons);

            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                Coupon coupon = new Coupon();
                coupon.setId(rs.getLong("ID"));
                coupon.setTitle(rs.getString("TITLE"));
                coupon.setStartDate(rs.getDate("START_DATE"));
                coupon.setEndDate(rs.getDate("END_DATE"));
                coupon.setAmount(rs.getInt("AMOUNT"));
                coupon.setType(CouponType.valueOf(rs.getString("TYPE")));
                coupon.setMessage(rs.getString("MESSAGE"));
                coupon.setPrice(rs.getDouble("PRICE"));
                coupon.setImage(rs.getString("IMAGE"));
                coupons.add(coupon);

            }
            return coupons;
        } catch (SQLException e) {
            throw new CouponSystemException("Fail to get all coupons", e);
        } finally {
            pool.returnConnection(connection);
        }
    }

    /**
     * Get coupon Amount
     *
     * @param title
     * @return number of Coupons
     * @throws CouponSystemException
     */
    public int getCouponAmount(String title) throws CouponSystemException {
        Connection connection = pool.getConnection();
        String sql = String.format(SQL_QUERY.SQL_Get_Coupon_Amount, title);

        try {
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            if (rs.next()) {
                return rs.getInt("AMOUNT");
            }

        } catch (SQLException e) {
            throw new CouponSystemException("Fail to get coupon amount", e);
        } finally {
            pool.returnConnection(connection);
        }

        return -1;
    }

    /**
     * Check if coupon is expired
     *
     * @param title Coupon title
     * @return boolean parameter if Coupon is expired
     * @throws CouponSystemException
     */
    public boolean isExpired(String title) throws CouponSystemException {
        Connection connection = pool.getConnection();
        String sql = String.format(SQL_QUERY.SQL_is_Coupon_Expired, title);

        try {
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            if (rs.next()) {
                Date endDate = rs.getDate("END_DATE");
                if (endDate.before(new Date(System.currentTimeMillis()))) {
                    return true;
                } else {
                    return false;
                }
            }

        } catch (SQLException e) {
            throw new CouponSystemException("Fail to check if coupon is expired", e);
        } finally {
            pool.returnConnection(connection);
        }

        return false;
    }

    /**
     * Delete all expired Coupons
     *
     * @param date Coupon end Date
     * @throws CouponSystemException
     */
    public void deleteAllExpiriedCoupons(Date date) throws CouponSystemException {
        Connection connection = pool.getConnection();
        String sqlCustCoupon = String.format(SQL_QUERY.SQL_Del_All_Expiried_Coupons_Cust, date);
        String sqlCompCoupon = String.format(SQL_QUERY.SQL_Del_All_Expiried_Coupons_Comp, date);
        String sqlCoupon = String.format(SQL_QUERY.SQL_Del_All_Expiried_Coupons, date);

        Statement stmt;
        try {
            stmt = connection.createStatement();
            stmt.executeUpdate(sqlCustCoupon);
            stmt.executeUpdate(sqlCompCoupon);
            stmt.executeUpdate(sqlCoupon);
        } catch (SQLException e) {
            throw new CouponSystemException("Fail to remove expired coupons", e);
        } finally {
            pool.returnConnection(connection);
        }

    }

    /**
     * Get coupon by Title
     *
     * @param title Coupon title
     * @return coupon
     * @throws CouponSystemException
     */
    public Coupon getCouponByTitle(String title) throws CouponSystemException {
        Connection connection = pool.getConnection();

        try {
            // read company coupon
            String sql = String.format(SQL_QUERY.SQL_Get_Coupon_By_Title, title);

            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            if (rs.next()) {
                Coupon coupon = new Coupon();
                coupon.setId(rs.getLong("ID"));
                coupon.setTitle(rs.getString("TITLE"));
                coupon.setStartDate(rs.getDate("START_DATE"));
                coupon.setEndDate(rs.getDate("END_DATE"));
                coupon.setAmount(rs.getInt("AMOUNT"));
                coupon.setType(CouponType.valueOf(rs.getString("TYPE")));
                coupon.setMessage(rs.getString("MESSAGE"));
                coupon.setPrice(rs.getDouble("PRICE"));
                coupon.setImage(rs.getString("IMAGE"));
                return coupon;
            }

        } catch (SQLException e) {
            throw new CouponSystemException("Fail to read Company coupon", e);
        } finally {
            pool.returnConnection(connection);
        }
        return null;
    }

}
