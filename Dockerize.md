# Stage 1: Building the SPA using Node.js
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serving the SPA using Nginx with Brotli support
FROM fholzer/nginx-brotli:v1.19.1 as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy the custom Nginx config to the image
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
