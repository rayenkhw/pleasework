FROM openjdk:17-jdk-slim

EXPOSE 8089

COPY target/foyer-5.0.0.jar sarra.jar

ENTRYPOINT ["java", "-jar", "sarra.jar"]