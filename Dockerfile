# Start with a base image containing Java runtime
FROM openjdk:17-jdk-slim

EXPOSE 8089

WORKDIR /appEya

COPY target/tp-foyer-1.0.0.jar file.jar

ENTRYPOINT ["java", "-jar", "file.jar"]