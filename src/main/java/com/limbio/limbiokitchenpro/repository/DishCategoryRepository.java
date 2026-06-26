package com.limbio.limbiokitchenpro.repository;

import com.limbio.limbiokitchenpro.entity.DishCategory;
import com.limbio.limbiokitchenpro.projection.DishCategoryListItemProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DishCategoryRepository extends JpaRepository<DishCategory, Integer> {
    @Query(value = """
        SELECT
            dc.dish_id AS dishId,
            dc.category_id AS categoryId
        FROM dish_category dc
        """, nativeQuery = true)
    List<DishCategoryListItemProjection> findAllForList();
}
