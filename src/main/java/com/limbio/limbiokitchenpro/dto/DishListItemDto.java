package com.limbio.limbiokitchenpro.dto;

import java.math.BigDecimal;

public class DishListItemDto {
    private Integer id;
    private String name;
    private BigDecimal price;
    private String mainImageUrl;

    public DishListItemDto(Integer id, String name, BigDecimal price, String mainImageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
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

    public String getMainImageUrl() {
        return mainImageUrl;
    }
}
