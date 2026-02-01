package com.limbio.limbiokitchenpro.projection;

import java.math.BigDecimal;

public interface DishListItemProjection {
    Integer getId();
    String getName();
    BigDecimal getPrice();
    String getMainImageUrl();
}
