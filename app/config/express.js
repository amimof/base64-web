var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var static = require('serve-static')

module.exports = function() {
	var app = express();
	var router = express.Router();

	// Configure our app to use body-parser. This will let us get the data from POST requests
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	// Middleware to use for all requests
	router.use(function(req, res, next) {
		// Website you wish to allow to connect
	    res.setHeader('Access-Control-Allow-Origin', '*');

	    // Request methods you wish to allow
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	    // Request headers you wish to allow
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    res.setHeader('Access-Control-Allow-Credentials', false);
		next();
	});

	// Import routes here, define them in 'routes' folder
	require('../routes/base64')(router);

	// Register our routes
	app.use('/api', router);

	// Serve static content
	app.use('/', static(path.join(__dirname, '../../public'), {'index': ['index.html']}));
	app.use('/node_modules', static(path.join(__dirname, '../../node_modules')));

	return app;

};
