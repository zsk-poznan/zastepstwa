FROM node:10-alpine AS builder

WORKDIR /app
COPY package*.json ./

RUN npm install

ADD . .

RUN npm run build

FROM sebp/lighttpd:latest

COPY --from=builder /app/build /var/www/localhost/htdocs
