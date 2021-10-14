FROM node:alpine

WORKDIR /app

COPY ./package.json /app/
RUN yarn install

COPY ./ /app/

ENV HOST 0.0.0.0
EXPOSE 3000
