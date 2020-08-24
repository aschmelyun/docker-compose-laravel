FROM php:7.4-fpm

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql

# Add UID '1000' to www-data
RUN usermod -u 1000 www-data

# Copy existing application directory permissions
COPY --chown=www-data:www-data src/ /var/www/html

# Change current user to www
USER www-data
