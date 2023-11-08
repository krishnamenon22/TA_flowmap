FROM node:14.18.1-alpine AS builder
 
WORKDIR /app

RUN apk update && apk upgrade && apk add git

COPY ./package.json ./
RUN file="$(node -v)" && echo $file

RUN npm install 

COPY . .

ARG BUILD_VERSION=1.0.0.0
ARG BUILD_ENVIRONMENT=ci

RUN npm run build:dev

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/build/ /usr/share/nginx/html/
