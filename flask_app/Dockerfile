# Image for development

FROM raspbian/stretch

WORKDIR /app

COPY *requirements.txt ./

RUN apt-get update && apt-get install -y \
        python3 \
        python3-pip \
    && rm -rf /var/lib/apt/lists/*
RUN pip3 install --upgrade pip
RUN pip3 install -r dev_requirements.txt
RUN apt-get remove -y --purge g++

ENV FLASK_APP main.py
ENV FLASK_ENV development

CMD ["./docker-entrypoint.sh"]