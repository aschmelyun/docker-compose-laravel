THIS_FILE := $(lastword $(MAKEFILE_LIST))

init:
	@$(MAKE) -f $(THIS_FILE) docker-build
	@$(MAKE) -f $(THIS_FILE) composer-install
	docker-compose exec php cp .env.example .env
	docker-compose exec php php artisan key:generate

docker-up: memory
	docker-compose up -d site

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

