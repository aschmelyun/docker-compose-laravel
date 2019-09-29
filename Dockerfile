FROM php:7.2-fpm-alpine

WORKDIR /var/www

RUN docker-php-ext-install pdo pdo_mysql
