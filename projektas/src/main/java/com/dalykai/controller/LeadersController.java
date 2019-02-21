package com.dalykai.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LeadersController {

    @GetMapping("/Leaders")
    public String Leaders() {

        return "leaders";
    }
}
