package com.lwando.issueTracker.API;

import com.lwando.issueTracker.BAL.EquipmentService;
import com.lwando.issueTracker.BAL.InspectionService;
import com.lwando.issueTracker.BAL.StatusService;
import com.lwando.issueTracker.BAL.UserService;
import com.lwando.issueTracker.DAL.Equipment;
import com.lwando.issueTracker.DAL.Inspection;
import com.lwando.issueTracker.DAL.Status;
import com.lwando.issueTracker.DAL.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Optional;

@Controller
public class InspectionController {

    private final InspectionService inspectionService;
    private final EquipmentService equipmentService;
    private final UserService userService;
    private final StatusService statusService;

    @Autowired
    public InspectionController(InspectionService inspectionService,
                                EquipmentService equipmentService,
                                UserService userService,
                                StatusService statusService) {
        this.inspectionService = inspectionService;
        this.equipmentService = equipmentService;
        this.userService = userService;
        this.statusService = statusService;
    }

    @QueryMapping
    public List<Inspection> inspections() {
        return inspectionService.getInspection();
    }

    @QueryMapping
    public Optional<Inspection> inspectionById(@Argument Long id) {
        return inspectionService.getInspectionById(id);
    }


    @SchemaMapping(typeName = "Inspection")
    public Optional<Equipment> equipment(Inspection inspection) {
        return equipmentService.getEquipmentById(inspection.getEquipmentId());
    }

    @SchemaMapping(typeName = "Inspection")
    public Optional<User> user(Inspection inspection) {
        return userService.getUserById(inspection.getUserId());
    }

    @SchemaMapping(typeName = "Inspection")
    public Optional<Status> status(Inspection inspection) {
        return statusService.getStatusById(inspection.getStatusId());
    }

    @MutationMapping
    public Inspection addInspection(@Argument String name, @Argument String description, @Argument Long equipmentId, @Argument Long userId, @Argument Long statusId, @Argument String date) {
        return inspectionService.addNewInspection(name, description, equipmentId, userId, statusId, date);
    }
}
