FROM php:7.4-fpm-alpine

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
