package com.vbronshtein.couponSystem.couponsystemderby.webServices;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.sql.Date;

import com.vbronshtein.couponSystem.couponsystemderby.beans.CouponType;
import com.vbronshtein.couponSystem.couponsystemderby.helper.TruncateAllTables;
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.mockito.InjectMocks;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


@RunWith(SpringJUnit4ClassRunner.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class CompanyWsTest {

    private MockMvc mockMvc;
    private MockMvc mockMvcAdmin;

    @InjectMocks
    private CompanyWS companyWS;

    @InjectMocks
    private AdminWS adminWS;

    @BeforeClass
    public static void setUpBeforeClass() throws Exception {
        TruncateAllTables truncateAllTables = new TruncateAllTables();
        truncateAllTables.trancateAll();
    }

    @Before
    public void setUp() throws Exception {
        mockMvc = MockMvcBuilders.standaloneSetup(companyWS).build();
        mockMvcAdmin = MockMvcBuilders.standaloneSetup(adminWS).build();
    }

    @Test
    public void testA_addCoupon() throws Exception {
        String osem = createJsonCompany("Osem", "1236", "support@osem.com");
        mockMvcAdmin.perform(post("/admin/createcompany").contentType(MediaType.APPLICATION_JSON).content(osem))
                .andExpect(status().isOk());

        String hiltonVacation = createJsonCoupon("Hilton", new Date(System.currentTimeMillis()),
                new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 2), 100, CouponType.TRAVELLING,
                "Hilton vacation", 1000, "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tel_Aviv_Promenade_panoramics.jpg");
        String jerusalemTrip = createJsonCoupon("Trip in Jerusalem", new Date(System.currentTimeMillis()),
                new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 20), 10, CouponType.TRAVELLING,
                "Day trip in Jerusalem", 200, "http://israeltours.com");

        mockMvc.perform(post("/company/createcoupon").contentType(MediaType.APPLICATION_JSON).content(hiltonVacation));
        mockMvc.perform(post("/company/createcoupon").contentType(MediaType.APPLICATION_JSON).content(jerusalemTrip));
    }

    @Test
    public void testB_removeCoupon() throws Exception {
        mockMvc.perform(delete("/company/removecoupon/2").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

    }

    @Test
    public void testC_updateCoupon() throws Exception {
        String hiltonVacation_new = createJsonCouponWithId(1, "Hilton", new Date(System.currentTimeMillis()),
                new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 2), 100, CouponType.TRAVELLING,
                "Hilton vacation", 555, "https://upload.wikimedia.org/wikipedia/commons/8/8b/Tel_Aviv_Promenade_panoramics.jpg");
        mockMvc.perform(put("/company/updateCoupon").contentType(MediaType.APPLICATION_JSON).content(hiltonVacation_new));

    }

    @Test
    public void testD_getCoupon() throws Exception {
        mockMvc.perform(get("/company/getcoupon/1").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title", Matchers.is("Hilton")))
                .andExpect(jsonPath("$.price", Matchers.is(555D)));

    }

    @Test
    public void testE_getCoupons() throws Exception {
        mockMvc.perform(get("/company/getallcoupon").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.*", Matchers.hasSize(1)));

    }

    @Test
    public void testF_getCouponByType() throws Exception {
        mockMvc.perform(get("/company/getcouponbytype/TRAVELLING").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.*",  Matchers.hasSize(1)));
//		.andExpect(jsonPath("$..title", Matchers.is("<[" + "\"Hilton\"" +"]>")));

    }

    @Test
    public void testG_getCouponUptoPrice() throws Exception {
        mockMvc.perform(get("/company/getcouponuptoprice/10000").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.[?title]", Matchers.is("Hilton")));;
//		.andExpect(jsonPath("$..title[0]", Matchers.is("Hilton")));;

    }

    @Test
    public void testH_getCouponUpToDate() throws Exception {
        String date = new Date(System.currentTimeMillis() + 1000 * 3600 * 24 * 2).toString();
        mockMvc.perform(get("/company/getcouponuptodate/"+ date).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

    }

    private static String createJsonCompany(String name, String password, String email) {
        return "{ \"name\": \"" + name + "\", " + "\"password\":\"" + password + "\"," + "\"email\":\"" + email + "\"}";
    }

    private static String createJsonCoupon(String title, Date startDate, Date endDate, int amount, CouponType type,
                                           String message, double price, String image) {
        return "{ \"title\": \"" + title + "\", " + "\"startDate\":\"" + startDate + "\"," + "\"endDate\":\"" + endDate
                + "\"," + "\"amount\":\"" + amount + "\"," + "\"type\":\"" + type + "\"," + "\"message\":\"" + startDate
                + "\"," + "\"price\":\"" + price + "\"," + "\"image\":\"" + image + "\"}";
    }

    private static String createJsonCouponWithId(long id, String title, Date startDate, Date endDate, int amount, CouponType type,
                                                 String message, double price, String image) {
        return "{ \"id\": \"" + id + "\", " + "\"title\": \"" + title + "\", " + "\"startDate\":\"" + startDate + "\"," + "\"endDate\":\"" + endDate
                + "\"," + "\"amount\":\"" + amount + "\"," + "\"type\":\"" + type + "\"," + "\"message\":\"" + startDate
                + "\"," + "\"price\":\"" + price + "\"," + "\"image\":\"" + image + "\"}";
    }

}
