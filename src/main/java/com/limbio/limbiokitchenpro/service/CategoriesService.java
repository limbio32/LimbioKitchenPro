package com.limbio.limbiokitchenpro.service;

import com.limbio.limbiokitchenpro.entity.Categories;
import com.limbio.limbiokitchenpro.repository.CategoriesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriesService {

    private final CategoriesRepository categoriesRepository;

    public CategoriesService(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public List<Categories> getAllCategories() {
        return categoriesRepository.findAll();
    }

}
