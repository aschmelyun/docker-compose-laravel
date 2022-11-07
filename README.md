# docker-compose-laravel
A pretty simplified Docker Compose workflow that sets up a LEMP network of containers for local Laravel development. You can view the full article that inspired this repo [here](https://dev.to/aschmelyun/the-beauty-of-docker-for-local-laravel-development-13c0). [The beauty of Docker for local Laravel development](https://dev.to/aschmelyun/the-beauty-of-docker-for-local-laravel-development-13c0)

[![GitNFT](https://img.shields.io/badge/%F0%9F%94%AE-Open%20in%20GitNFT-darkviolet?style=flat)](https://gitnft.quine.sh/app/commits/list/repo/docker-compose-laravel)

## Usage

To get started, make sure you have [Docker installed](https://docs.docker.com/docker-for-mac/install/) on your system, and then clone this repository.

Next, navigate in your terminal to the directory you cloned this, and spin up the containers for the web server by running `docker-compose up -d --build site`.

After that completes, follow the steps from the [src/README.md](src/README.md) file to get your Laravel project added in (or create a new blank one).

Bringing up the Docker Compose network with `site` instead of just using `up`, ensures that only our site's containers are brought up at the start, instead of all of the command containers as well. The following are built for our web server, with their exposed ports detailed:

- **nginx** - `:80`
- **postgre** - `:5432`
- **php** - `:9000`
- **redis** - `:6379`
- **mailhog** - `:8025`

Three additional containers are included that handle Composer, NPM, and Artisan commands *without* having to have these platforms installed on your local computer. Use the following command examples from your project root, modifying them to fit your particular use case. From inside `docker-compose-laravel/src(master)$` run the following commands:

1 - Generate the key
```
docker-compose run --rm artisan key:generate
```
2 - Install dependences with composer
```
docker-compose run --rm composer install
```
3 - Update composer
```
docker-compose run --rm composer update
```
4 - Run npm
```
docker-compose run --rm npm run dev
```
5 - Run migrations
```
docker-compose run --rm artisan migrate
```
6 - To SSH into the postgres container
```
docker exec -it <postgres container ID>  /bin/bash
```

## Permissions Issues

If you encounter any issues with filesystem permissions while visiting your application or running a container command, try completing one of the sets of steps below.

**If you are using your server or local environment as the root user:**

- Bring any container(s) down with `docker-compose down`
- Rename `docker-compose.root.yml` file to `docker-compose.yml`, replacing the previous one
- Re-build the containers by running `docker-compose build --no-cache`

**If you are using your server or local environment as a user that is not root:**

- Bring any container(s) down with `docker-compose down`
- In your terminal, run `export UID=$(id -u)` and then `export GID=$(id -g)`
- If you see any errors about readonly variables from the above step, you can ignore them and continue
- Re-build the containers by running `docker-compose build --no-cache`

Then, either bring back up your container network or re-run the command you were trying before, and see if that fixes it.

## Persistent PostgreSQL Storage

By default, whenever you bring down the Docker network, your PostgreSQL data will be removed after the containers are destroyed. If you would like to have persistent data that remains after bringing containers down and back up, do the following:

1. Create a `postgres` folder in the project root, alongside the `src` folder.
2. Under the `postgres` service in your `docker-compose.yml` file, add the following lines:

```
volumes:
  - ./postgres:/var/lib/postgresql/data
```

>It is available some startup PostgreSQL configuration at `docker-compose.yml` in the `postgres` session. By default it is created a database called `postgres`, a user called `postgres` with the password `postgres`. The PostgreSQL root password is also created with a password `postgres`. To get SSH access to the `postgres` container `docker exec -it <postgres container ID>  /bin/bash`


## Install PG-admin using Docker
Inspired in this project: [How To Install and Run PostgreSQL using Docker ?](https://dev.to/shree_j/how-to-install-and-run-psql-using-docker-41j2)
>Download the pgAdmin-4 browser version from docker-hub using the following command:

```
docker run --rm -p 5050:5050 thajeztah/pgadmin4
```
Now manage your postgres from the browser by launching [http://localhost:5050](http://localhost:5050)
> - ***Host***: `The IP address of your machine`
> - ***Maintenance Database***: Database used while creating the PSQL server with docker (`POSTGRES_DB`:`postgres`)
> - ***Username***: Username used while creating the PSQL server with docker (`POSTGRES_USER`:`postgres`)
> - ***Password***: Password used while creating the PSQL server with docker (`POSTGRES_PASSWORD`:`postgres`)

### WARNING: MAC M1 users:
>Note from Nov-2022: Running in a M1 Macbook get the following error: `WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested`. This is the solution [How to set up Postgresql and Pgadmin with Docker](https://dev.to/steadylearner/how-to-set-up-postgresql-and-pgadmin-with-docker-51h):
```
docker run --name pgadmin -e "PGADMIN_DEFAULT_EMAIL=xxxxxx@gmail.com" -e "PGADMIN_DEFAULT_PASSWORD=postgres" -p 5050:80 -d dpage/pgadmin4
```
>PgAdmin webpage will be available at `http://localhost:5050/login`



## Connecting to the `PSQL server` via `CLI` :

> 1. Find the docker-container-id in which the postgres is running using the below command. 
> ```
> docker ps -a
> ```
> 2. Run the following command to enter into the container (with the ID from step-1).
> ```
> docker exec -it <PSQL-Container-ID> bash
> ```
> 3. Authenticate to start using as postgres user. 
> ```
> psql -h localhost -p 5432 -U postgres -W
> ```
> - Enter the credentials used while creating the `PSQL server` container (`POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD`).

## Some useful commands:
1 - Check Containers
```
docker ps -a
```
2 - Stop all Containers
```
docker stop $(docker ps -a -q)
```
3 - Remove all Containers
```
docker rm $(docker ps -a -q)
```
4 - Check Containers
```
docker ps -a
```
5 - Check Images
```
docker images
```
6 - Remove all Images
```
docker rmi -f $(docker images -a -q)
```
7 - Check Images
```
docker images
```
8 - Build the site
```
docker-compose up -d --build site
```
9 - Remove all containers at once
```
docker ps -a && docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q) && docker ps -a && docker images && docker rmi -f $(docker images -a -q) && docker images
```


## How to pull or create a Laravel project

1. `Clone your project` OR `Create a new project` OR  `Copy all of the files` directly into this `src/` directory.
2. Build the Docker service:
```
docker-compose up -d --build site
```

3. In your terminal go to the `docker-compose-laravel/src` folder:
```
cd docker-compose-laravel/src
```
4. Remove the `README.md`:
```
cd src/ && rm -Rf README.md
```
5. Create a `new Laravel project`
```
docker-compose run --rm composer create-project laravel/laravel .
```
>Example:
```~/vhosts/docker-compose-laravel/src(master)$ docker-compose run --rm composer create-project laravel/laravel .```
6. Your Laravel projetc is available at [http://0.0.0.0:80](http://0.0.0.0/)

### Issues related to ***PostgreSQL***:
1 - Driver issue:
```
Illuminate\Database\QueryException 

could not find driver (SQL: select * from information_schema.tables where table_schema = laravel and table_name = migrations and table_type = 'BASE TABLE')
```
> Solution: change the driver in `src/.env` from `DB_CONNECTION=mysql` to `DB_CONNECTION=pgsql`

2 - Connection to server issue:
```
SQLSTATE[08006] [7] connection to server at "0.0.0.0", port 5432 failed: Connection refused
	Is the server running on that host and accepting TCP/IP connections? (SQL: select * from information_schema.tables where table_catalog = postgres and table_schema = public and table_name = migrations and table_type = 'BASE TABLE')
```
or
```
SQLSTATE[08006] [7] connection to server at "127.0.0.1", port 5432 failed: Connection refused
	Is the server running on that host and accepting TCP/IP connections? (SQL: select * from information_schema.tables where table_catalog = postgres and table_schema = public and table_name = migrations and table_type = 'BASE TABLE')
```
or 
```
SQLSTATE[08006] [7] connection to server at "localhost" (127.0.0.1), port 5432 failed: Connection refused
	Is the server running on that host and accepting TCP/IP connections?
connection to server at "localhost" (::1), port 5432 failed: Address not available
	Is the server running on that host and accepting TCP/IP connections? (SQL: select * from information_schema.tables where table_catalog = postgres and table_schema = public and table_name = migrations and table_type = 'BASE TABLE')
```
> Solution: change the host in `src/.env` from `DB_HOST=0.0.0.0/127.0.1/localhost` to `DB_HOST=<Your Current Machine IP address>`

These are the `.env` credentials to be used with ***PostgreSQL***:
```
DB_CONNECTION=pgsql
DB_HOST=<Your Current Machine IP address>
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=postgres
```

## Using BrowserSync with Laravel Mix

If you want to enable the hot-reloading that comes with Laravel Mix's BrowserSync option, you'll have to follow a few small steps. First, ensure that you're using the updated `docker-compose.yml` with the `:3000` and `:3001` ports open on the npm service. Then, add the following to the end of your Laravel project's `webpack.mix.js` file:

```javascript
.browserSync({
    proxy: 'site',
    open: false,
    port: 3000,
});
```

From your terminal window at the project root, run the following command to start watching for changes with the npm container and its mapped ports:

```bash
docker-compose run --rm --service-ports npm run watch
```

That should keep a small info pane open in your terminal (which you can exit with Ctrl + C). Visiting [localhost:3000](http://localhost:3000) in your browser should then load up your Laravel application with BrowserSync enabled and hot-reloading active.

## MailHog

The current version of Laravel (8 as of today) uses MailHog as the default application for testing email sending and general SMTP work during local development. Using the provided Docker Hub image, getting an instance set up and ready is simple and straight-forward. The service is included in the `docker-compose.yml` file, and spins up alongside the webserver and database services.

To see the dashboard and view any emails coming through the system, visit [localhost:8025](http://localhost:8025) after running `docker-compose up -d site`.
