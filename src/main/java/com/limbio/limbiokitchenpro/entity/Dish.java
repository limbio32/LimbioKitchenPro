package com.limbio.limbiokitchenpro.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "dishes")
public class Dish {

    @Id
    private int id;

    private String name;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(name = "portion_weight", nullable = false)
    private int portionWeight;

    private int calorie;
    private int protein;
    private int fat;
    private int car;
    private String description;

    public Dish(){

    }

    // геттеры и сеттеры
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String id) { this.name = name; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }

    public int getPortionWeight() { return portionWeight; }
    public void setPortionWeight(int portionWeight) { this.portionWeight = portionWeight; }

    public int getCalorie() { return calorie; }
    public void setCalorie(int calorie) { this.calorie = calorie; }

    public int getProtein() { return protein; }
    public void setProtein(int protein) { this.protein = protein; }

    public int getFat() { return fat; }
    public void setFat(int fat) { this.fat = fat; }

    public int getCar() { return car; }
    public void setCar(int car) { this.car = car; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
