package com.lwando.issueTracker.BAL;

import com.lwando.issueTracker.DAL.Role;
import com.lwando.issueTracker.DAL.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class RoleService {

    private final RoleRepository roleRepository;

    @Autowired
    public RoleService(RoleRepository statusRepository) {
        this.roleRepository = statusRepository;
    }
    public List<Role> getRole() {
        return roleRepository.findAll();
    }

    public Optional<Role> getRoleById(Long id) {
        return roleRepository.findById(id);
    }

    public Role addNewRole(Role role) {
        roleRepository.save(role);
        return role;
    }

    public void deleteRole(Long roleId) {
        boolean exists = roleRepository.existsById(roleId);
        if (!exists) {
            throw new IllegalStateException("role id " + roleId + " does not exist");
        }
        roleRepository.deleteById(roleId);
    }

    @Transactional
    public void updateRole(Long roleId, String name, String description) {
        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new IllegalStateException(
                        "Role with id " + roleId + " does not exist"
                ));

        role.setName(name);
        if (name != null && name.length() > 0 && !Objects.equals(role.getName(), name)) {
            role.setName(name);
        }

        role.setDescription(description);
        if (description != null && description.length() > 0 && !Objects.equals(role.getDescription(), description)) {
            role.setDescription(description);
        }
    }
}
