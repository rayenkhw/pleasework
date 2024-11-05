# Stage 1: Build the Angular app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the Angular project files and build
COPY . .
RUN npm run build -- --output-path=dist

# Stage 2: Use a minimal Node.js image with http-server to serve the app
FROM node:18-slim

# Install http-server globally
RUN npm install -g http-server

# Copy the build output from the builder stage
COPY --from=builder /app/dist /app/dist

# Set the working directory to the build output folder
WORKDIR /app/dist

# Expose port 4200 and run http-server
EXPOSE 4200
CMD ["http-server", "-p", "4200", "-P", "http://localhost:4200?"]
