package com.limbio.limbiokitchenpro.repository;

import com.limbio.limbiokitchenpro.entity.Categories;
import com.limbio.limbiokitchenpro.projection.CategoriesListItemProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoriesRepository extends JpaRepository<Categories, Integer> {
    @Query(value = """
        SELECT
            c.id AS id,
            c.name AS name,
            c.parent_id AS parentId,
            c.url_img AS urlImg
        FROM categories c
        """, nativeQuery = true)
    List<CategoriesListItemProjection> findAllForList();
}
