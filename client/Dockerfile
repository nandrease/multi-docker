FROM node:14.14.0-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm start

FROM nginx
EXPOSE 000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html