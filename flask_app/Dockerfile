# Image for development

FROM python:3.8-alpine

WORKDIR /app

RUN apk add --no-cache \
        libxslt-dev \
        libxml2 \
        libxml2-dev \
        g++

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

ENV FLASK_APP main.py
ENV FLASK_ENV development

CMD ["./docker-entrypoint.sh"]
