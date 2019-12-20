.DEFAULT_GOAL:=help

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} \
	 /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%17s\033[0m  %s\n", $$1, $$2 }' $(MAKEFILE_LIST)
	@echo ''

start: ## Start all containers in background
	docker-compose up --detach
	make generate-html

stop: ## Stop all containers
	docker-compose stop

remove: ## Remove all containers
	docker-compose down

lint: ## Lint the code
	docker-compose exec frontend npm run lint

logs: ## Display logs from all containers
	docker-compose logs --tail 50 --follow

generate-html: ## Generate Zastępstwa.html
	docker-compose exec flask python3 mocks/html_generator.py > flask_app/Zastępstwa.html