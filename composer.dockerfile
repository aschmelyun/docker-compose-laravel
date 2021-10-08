FROM composer:2

ARG PHPGROUP
ARG PHPUSER

ENV PHPGROUP=${PHPGROUP}
ENV PHPUSER=${PHPUSER}

RUN addgroup --system ${PHPGROUP}; exit 0
RUN adduser --system -G ${PHPGROUP} -s /bin/sh -D ${PHPUSER}; exit 0

WORKDIR /var/www/html
