package com.limbio.limbiokitchenpro.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "categories")
public class Categories {

    @Id
    private int id;

    private String name;

    @Column(name = "parent_id")
    private int parentId;

    @Column(name = "url_img")
    private String urlImg;

    public Categories(){

    }

    // геттеры и сеттеры
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getParentId() { return parentId; }
    public void setParentId(int id) { this.parentId = parentId; }

    public String getUrlImg() { return urlImg; }
    public void setUrlImg(String urlImg) { this.urlImg = urlImg; }

}

