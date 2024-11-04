# Start with a base image containing Java runtime
FROM openjdk:17-jdk-slim

EXPOSE 8082

COPY target/foyer-5.0.0.jar file.jar

ENTRYPOINT ["java", "-jar", "file.jar"]