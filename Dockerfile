# Choisir l'image de base
FROM openjdk:17-jdk-slim

# Ajouter l'auteur comme métadonnée
LABEL authors="MANSOUR"

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier JAR dans l'image
COPY target/tp-foyer-1.0.0.jar.jar app.jar

# Exposer le port de l'application
EXPOSE 8082

# Définir la commande de démarrage de l'application
ENTRYPOINT ["java", "-jar", "app.jar"]
