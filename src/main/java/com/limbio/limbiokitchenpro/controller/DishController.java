package com.limbio.limbiokitchenpro.controller;

import com.limbio.limbiokitchenpro.dto.RegisterRequest;
import com.limbio.limbiokitchenpro.dto.LoginRequest;
import com.limbio.limbiokitchenpro.entity.Dish;
import com.limbio.limbiokitchenpro.service.DishService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dishes")
public class DishController {

    private final DishService dishService;

    public DishController(DishService dishService) {
        this.dishService = dishService;
    }

    @GetMapping
    public ResponseEntity<List<Dish>> getAllDishes() {
        return ResponseEntity.ok(dishService.getAllDishes());
    }
}