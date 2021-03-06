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
    private String location;

    public Equipment(String name, String description, String location) {
        this.name = name;
        this.description = description;
        this.location = location;
    }

    public Equipment(Long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public Equipment() {
    }

    public Equipment(Long equipmentId) {
        this.id = equipmentId;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
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
