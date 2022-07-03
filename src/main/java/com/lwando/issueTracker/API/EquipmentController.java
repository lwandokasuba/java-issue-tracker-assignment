package com.lwando.issueTracker.API;

import com.lwando.issueTracker.BAL.EquipmentService;
import com.lwando.issueTracker.DAL.Equipment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Optional;

@Controller
public class EquipmentController {
    private final EquipmentService equipmentService;

    @Autowired
    public EquipmentController(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }

    @QueryMapping
    public List<Equipment> equipments() {
        return equipmentService.getEquipment();
    }

    @QueryMapping
    public Optional<Equipment> equipmentById(@Argument Long id) {
        return equipmentService.getEquipmentById(id);
    }

    @MutationMapping
    public Equipment addEquipment(@Argument String name, @Argument String description, @Argument String location) {
        return equipmentService.addNewEquipment(name, description, location);
    }

}
