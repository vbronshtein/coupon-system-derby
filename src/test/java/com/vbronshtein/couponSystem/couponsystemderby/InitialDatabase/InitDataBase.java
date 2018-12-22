package com.vbronshtein.couponSystem.couponsystemderby.InitialDatabase;

import com.vbronshtein.couponSystem.couponsystemderby.beans.Company;
import com.vbronshtein.couponSystem.couponsystemderby.beans.Coupon;
import com.vbronshtein.couponSystem.couponsystemderby.beans.CouponType;
import com.vbronshtein.couponSystem.couponsystemderby.beans.Customer;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;
import com.vbronshtein.couponSystem.couponsystemderby.facade.AdminFacade;
import com.vbronshtein.couponSystem.couponsystemderby.facade.CompanyFacade;
import com.vbronshtein.couponSystem.couponsystemderby.helper.TruncateAllTables;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.sql.Date;

@RunWith(SpringJUnit4ClassRunner.class)
public class InitDataBase {

    private TruncateAllTables truncateTables = new TruncateAllTables();

    private Company company_osem = new Company("Osem", "1234", "support@osem.com");
    private Company company_teva = new Company("Teva", "1234", "support@teva.com");
    private Company company_pepsi = new Company("Pepsi", "1234", "support@pepsi.com");
    private Company company_tempo = new Company("Tempo", "1234", "support@tempo.com");
    private Company company_intel = new Company("Intel", "1234", "support@intel.com");

    private Customer castomer_yossi = new Customer("Yossi", "1234");
    private Customer castomer_david = new Customer("David", "1234");
    private Customer castomer_ifat = new Customer("Ifat", "1234");
    private Customer castomer_natali = new Customer("Natali", "1234");
    private Customer castomer_alex = new Customer("Alex", "1234");

//    private Coupon coupon = new Coupon("Dinner in Hilton Tel Aviv", new Date(System.currentTimeMillis()), new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 400, CouponType.RESTURANS, );
    private Coupon coupon_1 = new Coupon("Dinner in Hilton Tel Aviv", new Date(System.currentTimeMillis()),
        new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 400, CouponType.RESTURANS, "Dinner in Hilton Tel Aviv",
        255, "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=chair-cutlery-diner-941861.jpg&fm=jpg");
    private Coupon coupon_2 = new Coupon("Safari zoo pass", new Date(System.currentTimeMillis()),
           new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 200, CouponType.TRAVELLING, "Stam coupon14",
           170, "https://upload.wikimedia.org/wikipedia/commons/7/7c/Safari_park.jpg");
    private Coupon coupon_3 = new Coupon("Meat dinner in Raanana", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 50, CouponType.RESTURANS, "Stam coupon14",
            99, "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?cs=srgb&dl=asparagus-barbecue-bbq-675951.jpg&fm=jpg");
    private Coupon coupon_4 = new Coupon("Chicago musical", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 100, CouponType.TRAVELLING, "Stam coupon14",
            140, "https://c1.staticflickr.com/5/4377/35609220753_ee7eca33f3_b.jpg");
    private Coupon coupon_5 = new Coupon("Gym 1 Year membership", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 100, CouponType.SPORTS, "Stam coupon14",
            1500, "https://upload.wikimedia.org/wikipedia/commons/b/b4/Cycle_Class_at_a_Gym.JPG");
    private Coupon coupon_6 = new Coupon("Online english course", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 300, CouponType.SPORTS, "Stam coupon14",
            200, "https://c1.staticflickr.com/9/8536/29053861320_010973c7fd_b.jpg");
    private Coupon coupon_7 = new Coupon("Laptop dell 15.8 inch", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 50, CouponType.ELECTRICITY, "Stam coupon14",
            1000, "https://upload.wikimedia.org/wikipedia/commons/9/90/Dell_Studio_1535.png");
    private Coupon coupon_8 = new Coupon("New Balance shoes", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 50, CouponType.SPORTS, "Stam coupon14",
            199, "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/New_Balance_ML574PPB.jpg/600px-New_Balance_ML574PPB.jpg");
    private Coupon coupon_9 = new Coupon("Trip to greece", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 100, CouponType.TRAVELLING, "Stam coupon14",
            169, "https://cdn.pixabay.com/photo/2015/10/20/12/10/greece-997683_960_720.jpg");
    private Coupon coupon_10 = new Coupon("Spa in crowne plaza TLV", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 100, CouponType.HEALTH, "Stam coupon14",
            1646, "https://upload.wikimedia.org/wikipedia/en/3/3b/Spa_at_Mandarin_Oriental_Harmony_Suite_Tokyo.jpg");
    private Coupon coupon_11 = new Coupon("A day trip to jerusalem", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 50, CouponType.TRAVELLING, "Stam coupon14",
            200, "https://cdn.pixabay.com/photo/2017/08/29/18/43/music-2694489_960_720.jpg");
    private Coupon coupon_12 = new Coupon("Bose Headphones", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 30, CouponType.ELECTRICITY, "Stam coupon14",
            89, "https://cdn.pixabay.com/photo/2017/08/29/18/43/music-2694489_960_720.jpg");
    private Coupon coupon_13 = new Coupon("Dyson v10", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 100, CouponType.ELECTRICITY, "Stam coupon14",
            899, "https://c1.staticflickr.com/1/892/41883330185_8715f1b480_b.jpg");
    private Coupon coupon_14 = new Coupon("Omer Adam in caesarea", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 30, CouponType.TRAVELLING, "Stam coupon14",
            1800, "https://upload.wikimedia.org/wikipedia/commons/6/6a/Hayehudim_in_Caesarea_2010_1.jpg");
    private Coupon coupon_15 = new Coupon("Sony TV 42 inch", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 150, CouponType.ELECTRICITY, "Stam coupon14",
            200, "https://c1.staticflickr.com/9/8639/16723556485_72a812b8a9_b.jpg");
    private Coupon coupon_16 = new Coupon("Dinner for two in TLV", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 50, CouponType.RESTURANS, "Stam coupon14",
            1899, "https://cdn.pixabay.com/photo/2016/06/11/01/07/table-decoration-1449232_960_720.jpg");
    private Coupon coupon_17 = new Coupon("Travel to Paris in 5 Star hotel", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 100, CouponType.TRAVELLING, "Stam coupon14",
            229, "https://upload.wikimedia.org/wikipedia/commons/8/8a/Paris_vue_d%27ensemble_tour_Eiffel.jpg");
    private Coupon coupon_18 = new Coupon("Yoga lesson in TLV", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 100, CouponType.SPORTS, "Stam coupon14",
            2300, "https://cdn.pixabay.com/photo/2017/11/18/05/00/yoga-2959213_960_720.jpg");
    private Coupon coupon_19 = new Coupon("Breakfast in Benedict", new Date(System.currentTimeMillis()),
            new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 31), 200, CouponType.RESTURANS, "Stam coupon14",
            49, "https://upload.wikimedia.org/wikipedia/commons/6/6f/Eggs_Benedict-01-cropped.jpg");


    @Test
    public void GenerateInitDB() throws CouponSystemException {
        truncateTables.trancateAll();
        AdminFacade af = new AdminFacade();
        af.createCompany(company_osem);
        af.createCustomer(castomer_yossi);

        CompanyFacade cf = new CompanyFacade(company_osem.getName());
        cf.createCoupon(coupon_1);
        cf.createCoupon(coupon_2);
        cf.createCoupon(coupon_3);
        cf.createCoupon(coupon_4);
        cf.createCoupon(coupon_5);

        cf.createCoupon(coupon_6);
        cf.createCoupon(coupon_7);
        cf.createCoupon(coupon_8);
        cf.createCoupon(coupon_9);
        cf.createCoupon(coupon_10);
//        cf.createCoupon(coupon_4);
//        cf.createCoupon(coupon_4);
//        cf.createCoupon(coupon_4);
//        cf.createCoupon(coupon_4);
//        cf.createCoupon(coupon_4);
//        cf.createCoupon(coupon_4);


    }

}
