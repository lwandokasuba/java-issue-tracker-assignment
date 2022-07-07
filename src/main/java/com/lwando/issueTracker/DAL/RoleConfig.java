package com.lwando.issueTracker.DAL;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class RoleConfig {

    @Bean
    CommandLineRunner roleCreator(RoleRepository repository) {
        return args -> {
            Role inspector = new Role("Inspector", "Inspects");

            Role supervisor = new Role("Supervisor", "Supervisors");

            repository.saveAll(List.of(inspector, supervisor));
        };
    }
}