var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var static = require('serve-static')
var Promise = require("bluebird");
var moment = require('moment');
var exports = module.exports = {};

var encodings = [
	'ascii',
	'utf8',
	'utf16le',
	'ucs2',
	'base64',
	'latin1',
	'binary',
	'hex'
];

var config = {
	port: process.env.LISTEN_PORT || 8080,
	host: process.env.LISTEN_HOST || '0.0.0.0'
};

// Check if encoding is defined and set to default if not
var getEncoding = function(enc) {
	if (typeof enc === 'undefined' || enc === '') {
    	return 'utf8';
	} else {
		return enc;
	}
}

// Check if encoding is in list of supported encodings
var isEncSupported = function(encoding) {
	var e = encodings.indexOf(encoding);
	if(e < 0) {
		return false;
	} else {
		return true;
	}
}

var encode = function(str, enc) {
	var encoding = getEncoding(enc);
	return new Promise(function(resolve, reject) {
		if(!isEncSupported(encoding)) {
			reject({'error': '\''+encoding+'\' is not a supported encoding.'});
		} else {
			resolve(Buffer.from(str, encoding).toString('base64'));
		}
	});
}

var decode = function(str, enc) {
	var encoding = getEncoding(enc);
	return new Promise(function(resolve, reject) {
		if(!isEncSupported(encoding)) {
			reject({'error': '\''+encoding+'\' is not a supported encoding.'});
		} else {
			resolve(Buffer.from(str, 'base64').toString(encoding))
		}
	});
}


var encodeParamData = function(req, res) {
	encode(req.params.data, req.query.encoding).then(function(d) {
		res.json({
			input: req.params.data,
			output: d,
			encoding: getEncoding(req.query.encoding),
			timestamp: moment()
		});
	}).catch(function(error) {
		res.status(500).send(error);
	});
}

var encodePostData = function(req, res) {
	encode(req.body.data, req.query.encoding).then(function(d) {
		res.json({
			input: req.body.data,
			output: d,
			encoding: getEncoding(req.query.encoding),
			timestamp: moment()
		});
	}).catch(function(error) {
		res.status(500).send(error);
	});
}

var decodeParamData = function(req, res) {
	decode(req.params.data, req.query.encoding).then(function(d) {	
		res.json({
			input: req.params.data,
			output: d,
			encoding: getEncoding(req.query.encoding),
			timestamp: moment()
		});
	}).catch(function(error) {
		res.status(500).send(error);
	});
};

var decodePostData = function(req, res) {
	decode(req.body.data, req.query.encoding).then(function(d) {
		res.json({
			input: req.body.data,
			output: d,
			encoding: getEncoding(req.query.encoding),
			timestamp: moment()
		});
	}).catch(function(error) {
		res.status(500).send(error);
	});
}


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

// Routes
router.route('/encode/:data')
	.get(encodeParamData);
router.route('/encode')
	.post(encodePostData);
router.route('/decode/:data')
	.get(decodeParamData);
router.route('/decode')
	.post(decodePostData);

// Register our routes
app.use('/api', router);

// Serve static content
app.use('/', static(path.join(__dirname, 'build'), {'index': ['index.html']}));
app.use('/node_modules', static(path.join(__dirname, '../../node_modules')));

app.listen(config.port, config.host);
console.log(`Listening on http://${config.host}:${config.port}/`);
