FROM node:13.12.0-alpine

WORKDIR /myreactapp

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]



