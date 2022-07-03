package com.lwando.issueTracker.DAL;

import javax.persistence.*;

@Entity
@Table
public class Status {
    @Id
    @SequenceGenerator(
            name = "status_sequence",
            sequenceName = "status_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "status_sequence"
    )

    private Long id;
    private String name;
    private String description;

    public Status(Long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public Status(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Status() {
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
}
