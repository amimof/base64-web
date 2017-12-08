// Put app config here

module.exports = {
	port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
	host: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
};
