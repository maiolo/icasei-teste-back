FROM node:10.22.1

WORKDIR /app

COPY package.json ./

RUN npm install 

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update\
    && apt-get install --no-install-recommends yarn -y

COPY . .

RUN yarn install
RUN npm install --save-dev webpack-dev-server
RUN export PATH=./node_modules/.bin:$PATH
