package com.vbronshtein.couponSystem.couponsystemderby;

import javax.servlet.http.HttpServletRequest;

import com.vbronshtein.couponSystem.couponsystemderby.couponSys.ClientType;
import com.vbronshtein.couponSystem.couponsystemderby.couponSys.CouponSystem;
import com.vbronshtein.couponSystem.couponsystemderby.exceptions.CouponSystemException;
import com.vbronshtein.couponSystem.couponsystemderby.facade.CouponClientFacade;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginServlet {
    @RequestMapping(value = "/loginr", method = RequestMethod.POST)
    public String doPostRedirect(
            @RequestParam String name, @RequestParam String pwd, @RequestParam ClientType usertype,
            HttpServletRequest request
    ) {

        // check which usertype we got!
//        ClientTypentFacade cf = (new CouponSystem()).login(name, pwd); // should be get instance
        try {
            CouponClientFacade cf =  CouponSystem.getInstance().login(name, pwd, usertype);
            System.out.println(cf);

        if (cf == null) // login failed!
        {
            System.out.println("Incorrect login");
            return "redirect:http://localhost:8080/index.html";
        }

        // success!
        request.getSession().setAttribute("facade", cf);

        // now redirect to the correct page!
        switch (usertype) {
            case ADMIN :
                System.out.println("Redirect to Admin ...");
                return "redirect:http://localhost:8080/admin/index.html";

            case COMPANY:
                System.out.println("Redirect to company ...");
                return "redirect:http://localhost:8080/company/index.html";
            case CUSTOMER:
                return "redirect:http://localhost:8080/customer/index.html";
        }
            System.out.println("Exit without case ...");
        return "redirect:http://localhost:8080/index.html";

        } catch (CouponSystemException e) {
//            e.printStackTrace();
//            e.getMessage();
            return "redirect:http://localhost:8080/index.html";
        }

    }


}