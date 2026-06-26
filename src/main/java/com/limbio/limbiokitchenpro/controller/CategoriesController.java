package com.limbio.limbiokitchenpro.controller;

import com.limbio.limbiokitchenpro.dto.CategoriesListItemDto;
import com.limbio.limbiokitchenpro.repository.CategoriesRepository;
import com.limbio.limbiokitchenpro.service.CategoriesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoriesController {

    private final CategoriesService categoriesService;
    private final CategoriesRepository categoriesRepository;

    public CategoriesController(CategoriesService categoriesService, CategoriesRepository categoriesRepository) {
        this.categoriesService = categoriesService;
        this.categoriesRepository = categoriesRepository;
    }

    @GetMapping
    public List<CategoriesListItemDto> getCategories() {
        return categoriesRepository.findAllForList()
                .stream()
                .map(p -> new CategoriesListItemDto(
                        p.getId(),
                        p.getName(),
                        p.getParentId(),
                        p.getUrlImg()
                ))
                .toList();
    }

}
