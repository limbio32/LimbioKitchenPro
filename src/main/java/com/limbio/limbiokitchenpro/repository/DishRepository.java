package com.limbio.limbiokitchenpro.repository;

import com.limbio.limbiokitchenpro.entity.Dish;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DishRepository extends JpaRepository<Dish, Integer> {

}