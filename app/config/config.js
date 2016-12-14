// Put app config here

module.exports = {
	port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
	host: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
	db: {
		url: 'mongodb://ansible:ansible@localhost:27017/ansible'
	},
	log: {
		filename: 'error.log',
		level: 'debug',
		maxsize: '10000000',
		maxFiles: '10'
	},
};
