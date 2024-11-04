package tn.esprit.foyer.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenAPIConfig {
    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .info(infoAPI());
    }
    public Info infoAPI() {
        return new Info().title("SpringDoc-Demo")
                .description("TP étude de cas")
                .contact(contactAPI());
    }
    public Contact contactAPI() {
        Contact contact = new Contact().name("Equipe ASI II")
                        .email("*************@esprit.tn")
                .url("https://www.linkedin.com/in/**********/");
        return contact;
}

    @Bean
    public GroupedOpenApi blocsPublicApi() {
        return GroupedOpenApi.builder()
                .group("Only Blocs Management API")
                                .pathsToMatch("/blocs/**")
                                .pathsToExclude("**")
                                .build();

    }
    @Bean
    public GroupedOpenApi etudiantPublicApi() {
        return GroupedOpenApi.builder()
                .group("Only Etudiants Management API")
                .pathsToMatch("/etudiant/**")
                .pathsToExclude("**")
                .build();

    }
    @Bean
    public GroupedOpenApi chambrePublicApi() {
        return GroupedOpenApi.builder()
                .group("Only Chambres Management API")
                .pathsToMatch("/chambres/**")
                .pathsToExclude("**")
                .build();

    }
    @Bean
    public GroupedOpenApi FoyerPublicApi() {
        return GroupedOpenApi.builder()
                .group("Only Foyers Management API")
                .pathsToMatch("/foyer/**")
                .pathsToExclude("**")
                .build();

    }
    @Bean
    public GroupedOpenApi reservationPublicApi() {
        return GroupedOpenApi.builder()
                .group("Only Reservation Management API")
                .pathsToMatch("/reservations/**")
                .pathsToExclude("**")
                .build();

    }
    @Bean
    public GroupedOpenApi universitePublicApi() {
        return GroupedOpenApi.builder()
                .group("Only Universite Management API")
                .pathsToMatch("/universites/**")
                .pathsToExclude("**")
                .build();

    }
}
