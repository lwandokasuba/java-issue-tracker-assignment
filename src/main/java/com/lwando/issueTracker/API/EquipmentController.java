package com.lwando.issueTracker.API;

import com.lwando.issueTracker.BAL.EquipmentService;
import com.lwando.issueTracker.DAL.Equipment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/equipment")
public class EquipmentController {
    private final EquipmentService equipmentService;

    @Autowired
    public EquipmentController(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }
    @GetMapping
    public List<Equipment> getEquipment() {
        return equipmentService.getEquipment();
    }

    @PostMapping
    public void addEquipment(@RequestBody Equipment equipment) {
        equipmentService.addNewEquipment(equipment);
    }

    @DeleteMapping(path = "{equipmentId}")
    public void deleteEquipment(@PathVariable("equipmentId") Long equipmentId) {
        equipmentService.deleteEquipment(equipmentId);
    }

    @PutMapping(path = "{equipmentId}")
    public void updateEquipment(
            @PathVariable("equipmentId") Long equipmentId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String description
    ) {
        equipmentService.updateEquipment(equipmentId, name, description);
    }
}
