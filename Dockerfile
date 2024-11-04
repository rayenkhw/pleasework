# Choisir l'image de base
FROM openjdk:17-jdk-slim

# Ajouter l'auteur comme métadonnée
LABEL authors="Sarra"

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier JAR dans l'image
COPY target/foyer-5.0.0.jar app.jar

# Exposer le port de l'application
EXPOSE 8082

# Définir la commande de démarrage de l'application
ENTRYPOINT ["java", "-jar", "app.jar"]