FROM node:13.12.0-alpine As build

WORKDIR /myreactapp/

COPY package*.json /myreactapp/

RUN npm install

COPY . /myreactapp/

EXPOSE 80 3000 443


CMD ["npm", "start"]



