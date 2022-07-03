package com.lwando.issueTracker.BAL;

import com.lwando.issueTracker.DAL.Status;
import com.lwando.issueTracker.DAL.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class StatusService {

    private final StatusRepository statusRepository;

    @Autowired
    public StatusService(StatusRepository statusRepository) {
        this.statusRepository = statusRepository;
    }
    public List<Status> getStatus() {
        return statusRepository.findAll();
    }

    public Optional<Status> getStatusById(Long id) {
        return statusRepository.findById(id);
    }

    public Status addNewStatus(Status status) {
        statusRepository.save(status);
        return status;
    }

    public void deleteStatus(Long statusId) {
        boolean exists = statusRepository.existsById(statusId);
        if (!exists) {
            throw new IllegalStateException("status id " + statusId + " does not exist");
        }
        statusRepository.deleteById(statusId);
    }

    @Transactional
    public void updateStatus(Long statusId, String name, String description) {
        Status status = statusRepository.findById(statusId)
                .orElseThrow(() -> new IllegalStateException(
                        "Status with id " + statusId + " does not exist"
                ));

        status.setName(name);
        if (name != null && name.length() > 0 && !Objects.equals(status.getName(), name)) {
            status.setName(name);
        }

        status.setDescription(description);
        if (description != null && description.length() > 0 && !Objects.equals(status.getDescription(), description)) {
            status.setDescription(description);
        }
    }
}
