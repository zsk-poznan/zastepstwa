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

ADD requirements.txt .

RUN pip3 install -r requirements.txt

RUN apk del g++

ADD . .

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi"]
