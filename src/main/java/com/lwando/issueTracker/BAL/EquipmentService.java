package com.lwando.issueTracker.BAL;

import com.lwando.issueTracker.DAL.Equipment;
import com.lwando.issueTracker.DAL.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EquipmentService {

    private final EquipmentRepository equipmentRepository;

    @Autowired
    public EquipmentService(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }
    public List<Equipment> getEquipment() {
        return equipmentRepository.findAll();
    }

    public Optional<Equipment> getEquipmentById(Long id) {
        return equipmentRepository.findById(id);
    }

    public Equipment addNewEquipment(String name, String description, String location) {
        Equipment equipment = new Equipment(name, description, location);
        equipmentRepository.save(equipment);
        return equipment;
    }

    public void deleteEquipment(Long equipmentId) {
        boolean exists = equipmentRepository.existsById(equipmentId);
        if (!exists) {
            throw new IllegalStateException("equipment id " + equipmentId + " does not exist");
        }
        equipmentRepository.deleteById(equipmentId);
    }

    @Transactional
    public void updateEquipment(Long equipmentId, String name, String description) {
        Equipment equipment = equipmentRepository.findById(equipmentId)
                .orElseThrow(() -> new IllegalStateException(
                        "Equipment with id " + equipmentId + " does not exist"
                ));

        equipment.setName(name);
        if (name != null && name.length() > 0 && !Objects.equals(equipment.getName(), name)) {
            equipment.setName(name);
        }

        equipment.setDescription(description);
        if (description != null && description.length() > 0 && !Objects.equals(equipment.getDescription(), description)) {
            equipment.setDescription(description);
        }
    }
}
