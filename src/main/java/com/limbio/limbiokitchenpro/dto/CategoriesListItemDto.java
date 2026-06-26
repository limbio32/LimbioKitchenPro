package com.limbio.limbiokitchenpro.dto;

public class CategoriesListItemDto {

    private Integer id;
    private String name;
    private Integer parentId;
    private String urlImg;

    public CategoriesListItemDto(Integer id, String name, Integer parentId, String urlImg) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.urlImg = urlImg;
    }

    // Сеттеры и геттеры
    public Integer getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public Integer getParentId() {
        return parentId;
    }
    public String getUrlImg()  {
        return urlImg;
    }

}
