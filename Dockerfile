FROM node:20-slim

RUN npm i -g pnpm

USER node

WORKDIR /home/node/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

CMD [ "pnpm", "start:dev" ]