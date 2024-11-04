FROM openjdk:17-jdk-slim

EXPOSE 8089

COPY target/tp-foyer-5.0.0.jar sarra.jar

ENTRYPOINT ["java", "-jar", "sarra.jar"]