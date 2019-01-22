FROM node:alpine

ADD ./* /home/node/

RUN cd /home/node
RUN npm install

WORKDIR /home/node
CMD npm start

EXPOSE 8080
