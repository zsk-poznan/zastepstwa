.DEFAULT_GOAL:=help

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} \
	 /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%17s\033[0m  %s\n", $$1, $$2 }' $(MAKEFILE_LIST)
	@echo ''

start: ## Start all containers in background
	@if ! [[ -d backend/venv ]]; then printf "\n\n\t It seems that you're running for the first time. This make take ~10-15 minutes so take a break. \n\n\n"; fi
	docker-compose up --detach

stop: ## Stop all containers
	docker-compose stop

remove: ## Remove all containers
	docker-compose down

lint: ## Lint the code
	docker-compose exec frontend npm run lint
	docker-compose exec backend sh -c "source venv/bin/activate && black --exclude=venv ."

logs: ## Display logs from all containers
	docker-compose logs --tail 50 --follow


# PRODUCTION

production: ## Run the latest version in production mode
	docker-compose -f production.yml down
	docker-compose -f production.yml pull
	docker-compose -f production.yml up -d

logs-prod: ## Display logs from containers in production mode
	docker-compose -f production.yml logs --tail 50 --follow
