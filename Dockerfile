FROM centos
MAINTAINER "Amir Mofasser https://github.com/amimof/"
COPY ./ .
RUN yum -y install epel-release && \
	yum -y install nodejs && \
	yum -y clean all && \
	npm install
EXPOSE 8080
CMD ["npm", "start"]
