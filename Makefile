THIS_FILE := $(lastword $(MAKEFILE_LIST))

init:
	@$(MAKE) -f $(THIS_FILE) docker-build
	@$(MAKE) -f $(THIS_FILE) composer-install
	docker-compose exec php cp .env.example .env
	docker-compose exec php chown -R www-data:www-data /var/www/html
	docker-compose run --rm artisan key:generate

docker-up: memory
	docker-compose up -d

docker-down:
	docker-compose down

docker-build: memory
	docker-compose up -d --build site

composer-install:
	docker-compose run --rm composer install

assets-install:
	docker-compose run --rm npm install

assets-dev:
	docker-compose run --rm npm run dev

memory:
	sudo sysctl -w vm.max_map_count=262144

perm: 
	sudo chown -R $(USER):$(USER) ./src/app
	sudo chown -R $(USER):$(USER) ./src/database
	sudo chown -R $(USER):$(USER) ./src/tests

