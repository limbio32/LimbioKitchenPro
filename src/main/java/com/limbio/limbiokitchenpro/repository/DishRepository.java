package com.limbio.limbiokitchenpro.repository;

import com.limbio.limbiokitchenpro.entity.Dish;
import com.limbio.limbiokitchenpro.projection.DishListItemProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DishRepository extends JpaRepository<Dish, Integer> {
    @Query(value = """
        SELECT
            d.id AS id,
            d.name AS name,
            d.price AS price,
            i.url AS mainImageUrl
        FROM dishes d
        LEFT JOIN dish_image di
            ON di.dish_id = d.id
            AND di.sort_order = 1
        LEFT JOIN images i
            ON i.id = di.image_id
        """, nativeQuery = true)
    List<DishListItemProjection> findAllForList();
}