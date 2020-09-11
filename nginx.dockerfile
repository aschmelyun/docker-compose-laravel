FROM nginx:stable-alpine

RUN addgroup -S 1000 && adduser -S 1000 -G 1000

ADD ./nginx/nginx.conf /etc/nginx/nginx.conf
ADD ./nginx/default.conf /etc/nginx/conf.d/default.conf