FROM php:7.4-fpm-alpine

ADD ./php/www.conf /usr/local/etc/php-fpm.d/www.conf

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

RUN mkdir -p /var/www/html

RUN chown laravel:laravel /var/www/html

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql

# install and enable xdebug
RUN apk add --no-cache $PHPIZE_DEPS \
	&& pecl install xdebug-2.9.8 \
	&& docker-php-ext-enable xdebug
