FROM node:alpine

ADD ./* ./

RUN npm install

CMD npm start

EXPOSE 8080
