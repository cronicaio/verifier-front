FROM node:11.7-alpine

ADD . /home/node/

WORKDIR /home/node/

RUN npm install
RUN npm run build

FROM httpd:2.4.54-alpine3.16

#Add config for http to https rewrite rule
ADD ./config/httpd.conf /usr/local/apache2/conf/httpd.conf
ADD ./config/rewrite-http-to-https.conf /usr/local/apache2/conf/extra/rewrite-http-to-https.conf

#Copy Static files into WEB server
COPY --from=0 /home/node/build/ /usr/local/apache2/htdocs/

EXPOSE 80 8080
