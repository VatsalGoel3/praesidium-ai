FROM node:20-alpine

RUN apk add --no-cache bash

WORKDIR /app

COPY ./praesidium-front/package*.json ./
RUN npm install esbuild@0.19.11 --save-exact
RUN npm install

RUN npm rebuild esbuild --platform=linux --arch=x64 --libc=musl

COPY praesidium-front .

EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]