ENV ?= dev
include ./docker/.env.${ENV}
-include ./.env

up:
	cp docker/.env.${ENV} .env
	cd docker && docker-compose -f docker-compose.${APP_MODE}.yml up -d --build

down:
	cd docker && docker-compose -f docker-compose.${APP_MODE}.yml down

ps:
	cd docker && docker-compose -f docker-compose.${APP_MODE}.yml ps
