# Start with a base image containing Java runtime
FROM openjdk:17-jdk-slim

EXPOSE 8082

COPY target/*.jar file.jar

ENTRYPOINT ["java", "-jar", "file.jar"]