var winston = require('winston');
var config = require('./config');

module.exports = function() {

  winston.level = config.log.level;
  return winston;

};
