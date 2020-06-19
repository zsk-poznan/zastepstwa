FROM strapi/strapi

WORKDIR /app
COPY package*.json ./

RUN yarn build

ADD . .

RUN yarn start

