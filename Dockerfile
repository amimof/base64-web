FROM centos
MAINTAINER "Amir Mofasser https://github.com/amimof/"
COPY ./ ${HOME}/base64-web
RUN yum -y install epel-release && \
	yum -y install nodejs && \
	yum -y clean all && \
	cd ${HOME}/base64-web; npm install
RUN ls -la ${HOME}
WORKDIR ${HOME}
EXPOSE 8080
CMD ["npm", "start"]
