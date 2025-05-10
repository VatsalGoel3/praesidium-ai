FROM node:20-bullseye

WORKDIR /app

COPY ./praesidium-front/package*.json ./

RUN npm install

COPY ./praesidium-front .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]