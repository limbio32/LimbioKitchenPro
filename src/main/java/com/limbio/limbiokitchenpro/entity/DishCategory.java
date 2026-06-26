package com.limbio.limbiokitchenpro.entity;

import jakarta.persistence.*;


@Entity
@Table(name = "dish_category")
public class DishCategory {

    @Id
    @Column(name = "dish_id")
    private int dishId;

    @Column(name = "category_id")
    private int categoryId;

    public DishCategory(){

    }

    // геттеры и сеттеры
    public int getDishId() { return dishId; }
    public void setDishId(int dishId) { this.dishId = dishId; }

    public int getCategoryId() { return categoryId; }
    public void setCategoryId(int categoryId) { this.categoryId = categoryId; }

}
