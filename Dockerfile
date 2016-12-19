FROM centos
MAINTAINER "Amir Mofasser https://github.com/amimof/"
COPY / ${HOME}
WORKDIR ${HOME}
RUN yum -y install epel-release && \
	yum -y install nodejs git && \
	yum -y clean all && \
	npm install --unsafe-perm=true
EXPOSE 8080
CMD ["npm", "start"]
