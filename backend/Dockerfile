FROM node:24-slim 

WORKDIR /app

COPY auth-service/package*.json ./

RUN npm install

COPY . .
WORKDIR /app/auth-service
CMD ["node", "server.js"]