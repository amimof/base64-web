var moment = require('moment');
var Base64 = require('../services/base64');

exports.encodeParamData = function(req, res) {
	Base64.encode(req.params.data, req.query.encoding).then(function(d) {
		res.json({
			input: req.params.data,
			output: d,
			encoding: Base64.getEncoding(req.query.encoding),
			timestamp: moment()
		});
	}).catch(function(error) {
		res.status(500).send(error);
	});
}

exports.encodePostData = function(req, res) {
	Base64.encode(req.body.data, req.query.encoding).then(function(d) {
		res.json({
			input: req.body.data,
			output: d,
			encoding: Base64.getEncoding(req.query.encoding),
			timestamp: moment()
		});
	}).catch(function(error) {
		res.status(500).send(error);
	});
}

exports.decodeParamData = function(req, res) {
	Base64.decode(req.params.data, req.query.encoding).then(function(d) {
		res.json({
			input: req.params.data,
			output: d,
			encoding: Base64.getEncoding(req.query.encoding),
			timestamp: moment()
		});
	}).catch(function(error) {
		res.status(500).send(error);
	});
};

exports.decodePostData = function(req, res) {
	Base64.decode(req.body.data, req.query.encoding).then(function(d) {
		res.json({
			input: req.body.data,
			output: d,
			encoding: Base64.getEncoding(req.query.encoding),
			timestamp: moment()
		});
	}).catch(function(error) {
		res.status(500).send(error);
	});
}