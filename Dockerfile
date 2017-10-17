FROM node:alpine
MAINTAINER "Amir Mofasser https://github.com/amimof/"
COPY / ${HOME}
WORKDIR ${HOME}
RUN	npm install --unsafe-perm=true
ENTRYPOINT ["npm", "start"]
