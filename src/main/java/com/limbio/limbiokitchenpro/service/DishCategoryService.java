package com.limbio.limbiokitchenpro.service;

import com.limbio.limbiokitchenpro.entity.DishCategory;
import com.limbio.limbiokitchenpro.repository.DishCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DishCategoryService {

    private final DishCategoryRepository dishCategoryRepository;

    public DishCategoryService(DishCategoryRepository dishCategoryRepository) {
        this.dishCategoryRepository = dishCategoryRepository;
    }

    public List<DishCategory> getAllDishCategory() {
        return dishCategoryRepository.findAll();
    }

}
