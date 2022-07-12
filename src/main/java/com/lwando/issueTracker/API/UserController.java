package com.lwando.issueTracker.API;

import com.lwando.issueTracker.BAL.RoleService;
import com.lwando.issueTracker.BAL.UserService;
import com.lwando.issueTracker.DAL.Role;
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
public class UserController {
    private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public UserController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @QueryMapping
    public Optional<User> user(@Argument Long id) {
        return userService.getUserById(id);
    }

    @SchemaMapping
    public Optional<Role> role(User user) {
        return roleService.getRoleById(user.getRoleId());
    }

    @MutationMapping
    public User addUser(@Argument String username, @Argument String password, @Argument Long roleId) {
        return userService.addNewUser(new User(username, password, roleId));
    }

}
