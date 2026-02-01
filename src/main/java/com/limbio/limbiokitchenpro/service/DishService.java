package com.limbio.limbiokitchenpro.service;

import com.limbio.limbiokitchenpro.entity.Dish;
import com.limbio.limbiokitchenpro.repository.DishRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DishService {

    private final DishRepository dishRepository;

    public DishService(DishRepository dishRepository) {
        this.dishRepository = dishRepository;
    }

    public List<Dish> getAllDishes() {
        return dishRepository.findAll();
    }
}