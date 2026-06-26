package com.limbio.limbiokitchenpro.dto;

public class DishCategoryListItemDto {
    private Integer dishId;
    private Integer categoryId;

    public DishCategoryListItemDto(Integer dishId, Integer categoryId) {
        this.dishId = dishId;
        this.categoryId = categoryId;
    }

    // Сеттеры и геттеры
    public Integer getDishId() {
        return dishId;
    }
    public Integer getCategoryId() {
        return categoryId;
    }

}
