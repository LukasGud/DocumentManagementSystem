package com.dalykai.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LeadersController {

    @GetMapping("/leaders")
    public String Leaders() {

        return "leaders";
    }

    @GetMapping("/admins")
    public String Admins() {

        return "admins";
    }
}
