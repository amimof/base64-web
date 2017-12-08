// server.js
var config = require('./app/config/config'),
	app = require('./app/config/express')()

// Start the server
app.listen(config.port, config.host);

module.exports = app;

console.log('Magic is happening on port ' + config.port);
