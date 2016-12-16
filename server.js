// server.js
var config = require('./app/config/config'),
	app = require('./app/config/express')(),
	log = require('./app/config/log')();

// Start the server
app.listen(config.port, config.host);

// Set-up logging
log.add(log.transports.File, config.log);

module.exports = app;

log.info('Magic is happening on port ' + config.port);
