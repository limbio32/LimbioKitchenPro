package com.limbio.limbiokitchenpro.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")

public class Controller {

    @GetMapping("/hello")
    public String hello() {
        return "Backend is working!";
    }


}