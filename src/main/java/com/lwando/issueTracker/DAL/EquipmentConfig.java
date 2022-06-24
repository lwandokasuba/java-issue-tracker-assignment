package com.lwando.issueTracker.DAL;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class EquipmentConfig {

    @Bean
    CommandLineRunner commandLineRunner(EquipmentRepository repository) {
        return args -> {
            Equipment transformer = new Equipment(
                    "Transformer",
                    "Something meh"
            );

            Equipment cable = new Equipment(
                    "Cable",
                    "Something meh"
            );

            repository.saveAll(List.of(transformer, cable));
        };
    }
}
