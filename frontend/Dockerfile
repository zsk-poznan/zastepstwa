FROM node:10-alpine AS builder

WORKDIR /app
COPY package*.json ./

RUN npm ci

ADD . .

RUN npm run build

FROM nginx:1.17.7-alpine

COPY --from=builder /app/build /usr/share/nginx/html
