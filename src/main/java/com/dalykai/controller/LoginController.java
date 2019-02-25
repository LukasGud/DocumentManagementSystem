package com.dalykai.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

	@GetMapping("/LoginPage")
	public String showMyLoginPage() {
		
		return "loginWithBootstrap";
		
	}
	@GetMapping("/accessDeniedPage")
    public String showAccessDenied() {
	    return "accessDeniedPage";
    }
}
