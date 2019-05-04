# Dockerfile
FROM node:10.15.3-alpine

WORKDIR /app

COPY package.json ./
RUN npm install
COPY server.js ./
COPY next.config.js ./
COPY static ./static
COPY pages ./pages
COPY data ./data
COPY components ./components
RUN npm run build

EXPOSE 3000
ENTRYPOINT NODE_ENV=production node server.js