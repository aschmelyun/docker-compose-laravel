# docker-compose-laravel
A pretty simplified docker-compose workflow that sets up a LEMP network of containers for local Laravel development. You can view the full article that inspired this repo [here](https://medium.com/@aschmelyun).


## Usage

To get started, make sure you have [Docker installed](https://docs.docker.com/docker-for-mac/install/) on your system, and then clone this repository.

Add your entire Laravel project to the `src` folder, then open a terminal and from this cloned respository's root run `docker-compose up -d --build`. Open up your browser of choice to [http://localhost:8080](http://localhost:8080) and you should see your Laravel app running as intended. 

**New:** Three new containers have been added that handle Composer, NPM, and Artisan commands without having to have these platforms installed on your local computer. Use the following command templates from your project root, modifiying them to fit your particular use case:

- `docker-compose run --rm composer update`
- `docker-compose run --rm npm run dev`
- `docker-compose run --rm artisan migrate` 

Containers created and their ports (if used) are as follows:

- **nginx** - `:8080`
- **mysql** - `:3306`
- **php** - `:9000`
- **npm**
- **composer**
- **artisan**

**New features** :
- a better php extensions installation with **[docker-php-extension-installer](https://github.com/mlocati/docker-php-extension-installer)**
- set user:group to 1000:1000 in both php and artisan containers to get around the permission issue in linux host.
- added persistent data for mysql and composer (use the cache for composer).
- an easy script to restore mysql data from a backup file (the backup file name must be "homestead.sql.gz") in case you got one, call it like that : 
    ```sh
    $ docker-compose exec mysql /bin/bash /backup_database/restore_database.sh
    ```

**Tips** :
- in case you use a php extension not installed in the official composer image, be sure it's installed in php-fpm:alpine image via Dockerfile and add the following to your composer.json file in src/ folder :
```sh
    "platform" : {
        "php" : "7.2",
        "ext-gd" : "1"
    }
```

>     replace php version and extension name with whatever you need.


- to call artisan tinker command use this line :

    ```sh
    $ docker-compose run --rm --user root:root artisan tinker 
    ```


