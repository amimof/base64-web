var Promise = require("bluebird");

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

// Check if encoding is defined and set to default if not
module.exports.getEncoding = getEncoding = function(enc) {
	if (typeof enc === 'undefined' || enc === '') {
    	return 'utf8';
	} else {
		return enc;
	}
}

// Check if encoding is in list of supported encodings
module.exports.isEncSupported = isEncSupported = function(encoding) {
	var e = encodings.indexOf(encoding);
	if(e < 0) {
		return false;
	} else {
		return true;
	}
}

module.exports.encode = function(str, enc) {
	var encoding = getEncoding(enc);
	return new Promise(function(resolve, reject) {
		if(!isEncSupported(encoding)) {
			reject({'error': '\''+encoding+'\' is not a supported encoding.'});
		} else {
			resolve(Buffer.from(str, encoding).toString('base64'));
		}
	});
}

module.exports.decode = function(str, enc) {
	var encoding = getEncoding(enc);
	return new Promise(function(resolve, reject) {
		if(!isEncSupported(encoding)) {
			reject({'error': '\''+encoding+'\' is not a supported encoding.'});
		} else {
			resolve(Buffer.from(str, 'base64').toString(encoding))
		}
	});
}

