package com.lwando.issueTracker.DAL;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class StatusConfig {

    @Bean
    CommandLineRunner statusCreator(StatusRepository repository) {
        return args -> {
            Status good = new Status("Good", "was in good condition");

            Status bad = new Status("Bad", "was in an bad condition");

            Status average = new Status("Average", "was in an average condtion");

            repository.saveAll(List.of(good, bad, average));
        };
    }
}