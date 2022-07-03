package com.lwando.issueTracker;

import com.lwando.issueTracker.BAL.EquipmentService;
import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import graphql.schema.idl.RuntimeWiring;
import graphql.schema.idl.TypeRuntimeWiring;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.graphql.execution.RuntimeWiringConfigurer;

import java.util.function.UnaryOperator;

@SpringBootApplication
public class IssueTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(IssueTrackerApplication.class, args);
	}

	@Bean
	RuntimeWiringConfigurer runtimeWiringConfigurer(EquipmentService equipmentService) {
		return builder -> builder.type("Query", wiring -> wiring
				.dataFetcher("equipments", environment -> equipmentService.getEquipment()));
	}
}
