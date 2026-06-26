package com.limbio.limbiokitchenpro.controller;

import com.limbio.limbiokitchenpro.dto.DishCategoryListItemDto;
import com.limbio.limbiokitchenpro.repository.DishCategoryRepository;
import com.limbio.limbiokitchenpro.service.DishCategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dish_category")
public class DishCategoryController {

    private final DishCategoryService dishCategoryService;
    private final DishCategoryRepository dishCategoryRepository;

    public DishCategoryController(DishCategoryService dishCategoryService, DishCategoryRepository dishCategoryRepository) {
        this.dishCategoryService = dishCategoryService;
        this.dishCategoryRepository = dishCategoryRepository;
    }

    @GetMapping
    public List<DishCategoryListItemDto> getDishCategory() {
        return dishCategoryRepository.findAllForList()
                .stream()
                .map(p -> new DishCategoryListItemDto(
                        p.getDishId(),
                        p.getCategoryId()
                ))
                .toList();
    }

}
