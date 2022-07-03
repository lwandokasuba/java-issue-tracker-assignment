package com.lwando.issueTracker.API;

import com.lwando.issueTracker.BAL.RoleService;
import com.lwando.issueTracker.DAL.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Optional;

@Controller
public class RoleController {
    private final RoleService roleService;

    @Autowired
    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @QueryMapping
    public List<Role> role() {
        return roleService.getRole();
    }

    @QueryMapping
    public Optional<Role> roleById(@Argument Long id) {
        return roleService.getRoleById(id);
    }

    @MutationMapping
    public Role addRole(@Argument String name, @Argument String description) {
        return roleService.addNewRole(new Role(name, description));
    }

}
