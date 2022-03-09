FROM node:latest

WORKDIR /usr/app

COPY ./package*.json .

RUN npm install

RUN apt update && \
    apt install -y curl

RUN curl -sfL $(curl -s https://api.github.com/repos/powerman/dockerize/releases/latest | grep -i \
    dockerize-$(uname -s)-$(uname -m)\" | cut -d\" -f4) | install /dev/stdin /usr/local/bin/dockerize
