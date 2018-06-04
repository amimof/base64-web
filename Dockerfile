FROM node:alpine
LABEL maintainer="Amir Mofasser https://github.com/amimof/"
COPY / ./
RUN	npm install --unsafe-perm=true
ENTRYPOINT ["npm", "start"]
