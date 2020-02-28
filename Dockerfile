FROM php:7.2-fpm-alpine

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql

# Install base packages
RUN apk update
RUN apk upgrade

# xdebug with VSCODE
ENV XDEBUG_VERSION=2.9.2
RUN apk --no-cache add --virtual .build-deps \
        g++ \
        autoconf \
        make && \
    pecl install xdebug-${XDEBUG_VERSION} && \
    docker-php-ext-enable xdebug && \
    apk del .build-deps && \
    rm -r /tmp/pear/* && \
    echo -e "xdebug.remote_enable=1\n\
        xdebug.remote_autostart=1\n\
        xdebug.remote_connect_back=0\n\
        xdebug.remote_port=3223\n\
        xdebug.idekey=\"VSCODE\"\n\
        xdebug.remote_log=/var/www/html/xdebug.log\n\
        xdebug.remote_host=host.docker.internal" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini


# Change TimeZone
RUN apk add --update tzdata
ENV TZ=Europe/Bucharest
