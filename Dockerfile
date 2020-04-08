FROM php:7.4-fpm-alpine

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql

# install and enable xdebug
RUN apk add --no-cache $PHPIZE_DEPS \
	&& pecl install xdebug-2.7.0 \
	&& docker-php-ext-enable xdebug