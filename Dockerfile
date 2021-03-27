FROM node:13.12.0-alpine As build

WORKDIR /myreactapp/

COPY package*.json /myreactapp/

RUN npm install

COPY . /myreactapp/

RUN npm test

EXPOSE 80 3000 443 8080


CMD ["npm", "start"]



