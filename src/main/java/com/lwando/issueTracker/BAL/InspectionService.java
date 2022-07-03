package com.lwando.issueTracker.BAL;

import com.lwando.issueTracker.DAL.Inspection;
import com.lwando.issueTracker.DAL.InspectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class InspectionService {

    private final InspectionRepository inspectionRepository;

    @Autowired
    public InspectionService(InspectionRepository inspectionRepository) {
        this.inspectionRepository = inspectionRepository;
    }
    public List<Inspection> getInspection() {
        return inspectionRepository.findAll();
    }

    public Optional<Inspection> getInspectionById(Long id) {
        return inspectionRepository.findById(id);
    }

    public Inspection addNewInspection(String name, String description, Long equipmentId, Long userId, Long statusId, String date) {
        Inspection inspection = new Inspection(name, description, equipmentId, userId, statusId, date);
        return inspectionRepository.save(inspection);
    }

    public void deleteInspection(Long inspectionId) {
        boolean exists = inspectionRepository.existsById(inspectionId);
        if (!exists) {
            throw new IllegalStateException("inspection id " + inspectionId + " does not exist");
        }
        inspectionRepository.deleteById(inspectionId);
    }

    @Transactional
    public void updateInspection(Long inspectionId, String name, String description) {
        Inspection inspection = inspectionRepository.findById(inspectionId)
                .orElseThrow(() -> new IllegalStateException(
                        "Inspection with id " + inspectionId + " does not exist"
                ));

        inspection.setName(name);
        if (name != null && name.length() > 0 && !Objects.equals(inspection.getName(), name)) {
            inspection.setName(name);
        }

        inspection.setDescription(description);
        if (description != null && description.length() > 0 && !Objects.equals(inspection.getDescription(), description)) {
            inspection.setDescription(description);
        }
    }
}
