package com.limbio.limbiokitchenpro.dto;

import java.math.BigDecimal;

public class DishListItemDto {
    private Integer id;
    private String name;
    private BigDecimal price;
    private Integer portionWeight;
    private Integer calorie;
    private Integer protein;
    private Integer fat;
    private Integer car;
    private String description;
    private String mainImageUrl;


    public DishListItemDto(Integer id, String name, BigDecimal price, Integer portionWeight, Integer calorie, Integer protein, Integer fat, Integer car, String description, String mainImageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.portionWeight = portionWeight;
        this.calorie = calorie;
        this.protein = protein;
        this.fat = fat;
        this.car = car;
        this.description = description;
        this.mainImageUrl = mainImageUrl;
    }

    // Сеттеры и геттеры
    public Integer getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public BigDecimal getPrice() {
        return price;
    }
    public Integer getPortionWeight() {
        return portionWeight;
    }
    public Integer getCalorie() {
        return calorie;
    }
    public Integer getProtein() {
        return protein;
    }
    public Integer getFat() {
        return fat;
    }
    public Integer getCar() {
        return car;
    }
    public String getDescription() {
        return description;
    }
    public String getMainImageUrl() {
        return mainImageUrl;
    }
}
