FROM node:11.7-alpine

ADD . /home/node/

WORKDIR /home/node/

RUN npm install
RUN npm run build

FROM httpd:alpine

RUN mkdir /usr/local/apache2/htdocs/public-html/

COPY --from=0 /home/node/build /usr/local/apache2/htdocs/

EXPOSE 80
