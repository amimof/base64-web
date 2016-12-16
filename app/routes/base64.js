var base64 = require('../controllers/base64');

module.exports = function(router) {

	// Encoding
	router.route('/base64/encode/:data')
		.get(base64.encodeParamData);
	router.route('/base64/encode')
		.post(base64.encodePostData);

	// Decoding
	router.route('/base64/decode/:data')
		.get(base64.decodeParamData);
	router.route('/base64/decode')
		.post(base64.decodePostData);

}
