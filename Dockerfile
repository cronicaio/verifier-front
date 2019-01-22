FROM node:alpine

ADD ./* /home/node/

WORKDIR /home/node

RUN npm install

CMD npm start

EXPOSE 8080
