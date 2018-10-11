package com.vbronshtein.couponSystem.couponsystemderby.webServices;


import com.vbronshtein.couponSystem.couponsystemderby.helper.TruncateAllTables;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.hamcrest.Matchers;
import org.junit.Before;
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
public class AdminWsTest {

    private MockMvc mockMvc;
    private TruncateAllTables truncateSQL = new TruncateAllTables();

    @InjectMocks
    private AdminWS adminWS;

    @Before
    public void setUp() throws Exception {
        mockMvc = MockMvcBuilders.standaloneSetup(adminWS).build();

    }

    @Test
    public void testA_CreateNewCompany() throws Exception {
        truncateSQL.trancateAll();
        String osem = createJsonCompany("Osem", "1234", "support@osem.com");
        String teva = createJsonCompany("Teva", "1234", "support@teva.com");
        mockMvc.perform(post("/admin/createcompany").contentType(MediaType.APPLICATION_JSON).content(osem))
                .andExpect(status().isOk());
        mockMvc.perform(post("/admin/createcompany").contentType(MediaType.APPLICATION_JSON).content(teva))
                .andExpect(status().isOk());
    }

    @Test
    public void testB_RemoveCompany() throws Exception {
        mockMvc.perform(delete("/admin/removecompany/2").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void testC_UpdateCompany() throws Exception {
        String osem_new = createJsonCompanyWithId(1, "Osem", "4321", "support@osem.com");
        mockMvc.perform(put("/admin/updatecompany").contentType(MediaType.APPLICATION_JSON).content(osem_new))
                .andExpect(status().isOk());
    }

    @Test
    public void testD_GetAllCompanies() throws Exception {
        mockMvc.perform(get("/admin/getallcompanies").accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
                .andExpect(jsonPath("$.*", Matchers.hasSize(1)));
    }

    @Test
    public void testE_GetCompanyt() throws Exception {
        mockMvc.perform(get("/admin/getcompany/1").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", Matchers.is("Osem")))
                .andExpect(jsonPath("$.password", Matchers.is("4321")));
    }

    @Test
    public void testF_CreateCustomer() throws Exception {
        String yossi = createJsonCustomer("Yossi", "1234");
        String neta = createJsonCustomer("Neta", "1234");
        mockMvc.perform(post("/admin/createcustomer").contentType(MediaType.APPLICATION_JSON).content(yossi))
                .andExpect(status().isOk());
        mockMvc.perform(post("/admin/createcustomer").contentType(MediaType.APPLICATION_JSON).content(neta))
                .andExpect(status().isOk());
    }

    @Test
    public void testG_RemoveCustomer() throws Exception {
        mockMvc.perform(delete("/admin/removecustomer/2").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void testH_UpdateCustomer() throws Exception {
        String yossi_new = createJsonCustomerWithId(1, "Yossi", "4321");
        mockMvc.perform(put("/admin/updatecustomer").contentType(MediaType.APPLICATION_JSON).content(yossi_new))
                .andExpect(status().isOk());
    }

    @Test
    public void testI_GetAllCustomers() throws Exception {
        mockMvc.perform(get("/admin/getallcustomers").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.*", Matchers.hasSize(1)));
    }

    @Test
    public void testJ_GetCustomer() throws Exception {
        mockMvc.perform(get("/admin/getcustomer/1").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.custName", Matchers.is("Yossi")))
                .andExpect(jsonPath("$.password", Matchers.is("4321")));;
    }



    private static String createJsonCompany(String name, String password, String email) {
        return "{ \"name\": \"" + name + "\", " + "\"password\":\"" + password + "\"," + "\"email\":\"" + email + "\"}";
    }
    private static String createJsonCompanyWithId(long id, String name, String password, String email) {
        return "{ \"id\": \"" + id + "\", " + "\"name\": \"" + name + "\", " + "\"password\":\"" + password + "\"," + "\"email\":\"" + email + "\"}";
    }

    private static String createJsonCustomer(String name, String password) {
        return "{ \"custName\": \"" + name + "\", " + "\"password\":\"" + password + "\"}";
    }
    private static String createJsonCustomerWithId(long id, String name, String password) {
        return "{ \"id\": \"" + id + "\", " + "\"custName\": \"" + name + "\", " + "\"password\":\"" + password + "\"}";
    }

}
