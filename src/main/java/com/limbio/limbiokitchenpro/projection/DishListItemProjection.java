package com.limbio.limbiokitchenpro.projection;

import java.math.BigDecimal;

public interface DishListItemProjection {
    Integer getId();
    String getName();
    BigDecimal getPrice();
    Integer getPortionWeight();
    Integer getCalorie();
    Integer getProtein();
    Integer getFat();
    Integer getCar();
    String getDescription();
    String getMainImageUrl();
}
