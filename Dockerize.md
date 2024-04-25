# Stage 1: Building the SPA using Node.js
# Use an official Node image as the base image
FROM node:latest as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest source code from host to image filesystem
COPY . .

# Build app
RUN npm run build

# Stage 2: Serving the SPA using Nginx
# Use an official Nginx image as the base image
FROM nginx:alpine as production-stage

# Copy the built assets from the build stage to the default Nginx serve directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 to the Docker host, so we can access it from the outside.
EXPOSE 80

# The default command to run when starting the container
CMD ["nginx", "-g", "daemon off;"]
