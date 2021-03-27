FROM node:13.12.0-alpine As build

WORKDIR /myreactapp/

COPY package*.json /myreactapp/

RUN npm install

COPY . /myreactapp/

RUN npm run build

FROM nginx

FROM nginx:1.17.1

COPY --from=build /client_app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 3000 443 8080


CMD ["nginx", "-g", "daemon off;"]



