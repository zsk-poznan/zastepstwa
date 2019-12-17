# Image for development

FROM raspbian/stretch

WORKDIR /app

RUN apt-get update && apt-get install -y \
        python3 \
        python3-pip \
        libxslt1.1 \
    && rm -rf /var/lib/apt/lists/*

RUN sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
    locale-gen
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

COPY *requirements.txt ./

RUN pip3 install --upgrade pip
RUN pip3 install -r dev_requirements.txt
RUN apt autoremove -y

ENV FLASK_APP main.py
ENV FLASK_ENV development

CMD ["./docker-entrypoint.sh"]
