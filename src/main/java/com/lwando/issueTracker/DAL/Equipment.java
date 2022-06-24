package com.lwando.issueTracker.DAL;

import javax.persistence.*;

@Entity
@Table
public class Equipment {
    @Id
    @SequenceGenerator(
            name = "equipment_sequence",
            sequenceName = "equipment_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "equipment_sequence"
    )
    private Long id;
    private String name;
    private String description;

    public Equipment(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Equipment(Long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public Equipment() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Equipment{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
