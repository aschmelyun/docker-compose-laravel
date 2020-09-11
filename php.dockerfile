FROM php:7.4-fpm-alpine

RUN addgroup -S 1000 && adduser -S 1000 -G 1000

ADD ./php/www.conf /usr/local/etc/php-fpm.d/www.conf

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql
