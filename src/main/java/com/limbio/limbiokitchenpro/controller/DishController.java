package com.limbio.limbiokitchenpro.controller;

import com.limbio.limbiokitchenpro.dto.DishListItemDto;
import com.limbio.limbiokitchenpro.repository.DishRepository;
import com.limbio.limbiokitchenpro.service.DishService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dishes")
public class DishController {

    private final DishService dishService;
    private final DishRepository dishRepository;

    public DishController(DishService dishService, DishRepository dishRepository) {
                this.dishService = dishService;
                this.dishRepository = dishRepository;
    }

    @GetMapping
    public List<DishListItemDto> getProducts() {
        return dishRepository.findAllForList()
                .stream()
                .map(p -> new DishListItemDto(
                        p.getId(),
                        p.getName(),
                        p.getPrice(),
                        p.getMainImageUrl()
                ))
                .toList();
    }
}