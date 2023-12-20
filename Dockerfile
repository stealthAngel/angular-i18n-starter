# Stage 1: Build stage using Node.js
FROM node:20 as build

# Set the working directory in the container
WORKDIR /app

# Stage 2: Production stage using Nginx
FROM nginx:latest

# Remove default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built Angular app to Nginx server directory
COPY dist/angular-i18n-tutorial/browser /usr/share/nginx/html

# Expose port
EXPOSE 80
EXPOSE 7001

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
