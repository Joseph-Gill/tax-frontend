FROM node:10.15.3

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy wget

RUN mkdir -p /frontend_tmp
RUN mkdir -p /frontend
WORKDIR /frontend_tmp
COPY ./package.json /frontend_tmp/
COPY ./yarn.lock /frontend_tmp/
RUN yarn install --frozen-lockfile
COPY ./ /frontend_tmp
RUN yarn build


