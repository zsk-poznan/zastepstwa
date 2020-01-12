.DEFAULT_GOAL:=help

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} \
	 /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%17s\033[0m  %s\n", $$1, $$2 }' $(MAKEFILE_LIST)
	@echo ''

start: ## Start all containers in background
	@if ! [[ -d flask_app/venv ]]; then printf "\n\n\t It seems that you're running for the first time. This make take ~10-15 minutes so take a break. \n\n\n"; fi
	docker-compose up --detach

stop: ## Stop all containers
	docker-compose stop

remove: ## Remove all containers
	docker-compose down

lint: ## Lint the code
	docker-compose exec frontend npm run lint
	docker-compose exec flask sh -c "source venv/bin/activate && black --exclude=venv ."

logs: ## Display logs from all containers
	docker-compose logs --tail 50 --follow


# PRODUCTION

start-prod: ## Start in production mode
	docker-compose -f production.yml up -d

stop-prod: ## Stop containers in production mode
	docker-compose -f production.yml stop

logs-prod: ## Display logs from containers in production mode
	docker-compose -f production.yml logs --tail 50 --follow

remove-prod: ## Remove containers in production mode
	docker-compose -f production.yml down

# System setup

install: ## Install docker and docker-compose
	set -eu pipefail
	sudo apt-get update -y
	sudo apt-get upgrade -y
	sudo apt-get install -y python3 python3-pip curl
	curl -sSL https://get.docker.com | sh
	pip3 install docker-compose
	sudo usermod -aG docker $USER
