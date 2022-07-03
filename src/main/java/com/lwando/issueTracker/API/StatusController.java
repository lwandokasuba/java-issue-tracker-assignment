package com.lwando.issueTracker.API;

import com.lwando.issueTracker.BAL.StatusService;
import com.lwando.issueTracker.DAL.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Optional;

@Controller
public class StatusController {
    private final StatusService statusService;

    @Autowired
    public StatusController(StatusService statusService) {
        this.statusService = statusService;
    }

    @QueryMapping
    public List<Status> status() {
        return statusService.getStatus();
    }

    @QueryMapping
    public Optional<Status> statusById(@Argument Long id) {
        return statusService.getStatusById(id);
    }

    @MutationMapping
    public Status addStatus(@Argument String name, @Argument String description) {
        return statusService.addNewStatus(new Status(name, description));
    }

}
