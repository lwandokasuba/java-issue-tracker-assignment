package com.lwando.issueTracker.DAL;

import javax.persistence.*;

@Entity
@Table
public class Inspection {
    @Id
    @SequenceGenerator(
            name = "inspection_sequence",
            sequenceName = "inspection_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "inspection_sequence"
    )
    private Long id;
    private Long equipmentId;
    private Long statusId;
    private Long userId;
    private String name;
    private String description;
    private String date;

    public Inspection(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Inspection(Long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public Inspection(String name, String description, Long id, Long equipmentId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.equipmentId = equipmentId;
    }

    public Inspection(String name, String description, Long equipmentId, Long statusId, Long userId, String date) {
        this.equipmentId = equipmentId;
        this.statusId = statusId;
        this.userId = userId;
        this.name = name;
        this.description = description;
        this.date = date;
    }

    public Inspection() {
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

    public Long getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(Long equipmentId) {
        this.equipmentId = equipmentId;
    }

    public Long getStatusId() {
        return statusId;
    }

    public void setStatusId(Long statusId) {
        this.statusId = statusId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Inspection{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
