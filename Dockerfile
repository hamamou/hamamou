### Build stage: generate optimized Tailwind CSS
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund

# Copy config & sources
COPY tailwind.config.js postcss.config.js ./
COPY src ./src
COPY index.html ./

# Build Tailwind output
RUN npx tailwindcss -i ./src/input.css -o ./output.css --minify

### Runtime stage: tiny static server image
FROM pierrezemb/gostatic
COPY --from=build /app/index.html /srv/http/
COPY --from=build /app/output.css /srv/http/
COPY favicon.ico /srv/http/
CMD ["-port","8080","-https-promote","-enable-logging"]
