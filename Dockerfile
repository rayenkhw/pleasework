FROM openjdk:17-jdk-slim

EXPOSE 8082

WORKDIR /appDorra

COPY target/tp-foyer-1.0.0.jar appfile.jar

ENTRYPOINT ["java", "-jar", "appfile.jar"]