FROM --platform=linux/amd64 node:lts-buster as starter
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install --no-optional && npm cache clean --force
ENV PATH /src/usr/app/node_modules/.bin:$PATH
ENV DOCKERIZE_VERSION v0.7.0
RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*
COPY . .
CMD [ "npm", "start" ]