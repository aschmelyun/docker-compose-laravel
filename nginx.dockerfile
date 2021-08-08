FROM nginx:stable-alpine

ARG NGINXGROUP
ARG NGINXUSER

ENV NGINXGROUP=${NGINXGROUP}
ENV NGINXUSER=${NGINXUSER}

RUN sed -i "s/user www-data/user ${NGINXUSER}/g" /etc/nginx/nginx.conf

ADD ./nginx/default.conf /etc/nginx/conf.d/

RUN mkdir -p /var/www/html

RUN adduser -g ${NGINXGROUP} -s /bin/sh -D ${NGINXUSER}; exit 0
