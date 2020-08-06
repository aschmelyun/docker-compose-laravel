docker-up: memory
	docker-compose up -d

docker-down:
	docker-compose down

docker-build: memory
	docker-compose up --build -d

artisan:
	docker-compose run --rm artisan $(param)

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
