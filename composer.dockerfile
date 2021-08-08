FROM composer:2

ARG PHPGROUP
ARG PHPUSER

ENV PHPGROUP=${PHPGROUP}
ENV PHPUSER=${PHPUSER}

RUN addgroup -g 1000 ${PHPGROUP} && adduser -g ${PHPGROUP} -s /bin/sh -D ${PHPUSER}; exit 0

WORKDIR /var/www/html
