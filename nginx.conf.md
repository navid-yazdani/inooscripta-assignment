server {
    listen 80;

    location / {
        root /usr/share/nginx/html;
        try_files $uri /index.html;

        # Add headers to serve security related headers
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;
        add_header Referrer-Policy "no-referrer-when-downgrade" always;

        # Gzip Settings
        gzip on;
        gzip_vary on;
        gzip_min_length 1000;
        gzip_proxied expired no-cache no-store private auth;
        gzip_types text/plain application/javascript application/x-javascript text/javascript text/xml text/css application/xml;

        # Brotli is automatically handled by the nginx-brotli module in this image

        # Cache settings for static assets
        location ~* \.(css|js|gif|jpeg|jpg|png|svg|woff|woff2)$ {
            expires 30d;
            add_header Cache-Control "public, no-transform";
        }
    }
}
