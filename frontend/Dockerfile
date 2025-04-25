FROM node:23-slim AS build
WORKDIR /app 

COPY newsbridge/package*.json ./newsbridge/


WORKDIR /app/newsbridge
RUN npm install


COPY newsbridge/ /app/newsbridge/

RUN npm run build 

FROM nginx:stable-alpine 
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/newsbridge/dist /usr/share/nginx/html 

CMD ["nginx", "-g", "daemon off;"]
