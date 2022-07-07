package com.lwando.issueTracker.DAL;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner userCreator(UserRepository repository) {
        return args -> {
            User admin = new User("admin", "password");

            repository.saveAll(List.of(admin));
        };
    }
}