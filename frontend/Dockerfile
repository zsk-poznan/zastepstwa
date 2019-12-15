FROM raspbian/stretch

WORKDIR /app

RUN apt-get update && apt-get install -y \
        nodejs \
    && rm -rf /var/lib/apt/lists/*

ADD package*.json ./

RUN npm install

CMD ["npm", "start"]