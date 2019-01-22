FROM node:11.7-alpine

ADD . /home/node/

WORKDIR /home/node/

RUN npm install
RUN npm run build

CMD npm start

EXPOSE 8080
