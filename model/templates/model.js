var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var <%= name %>Schema = new Schema({

});

module.exports = mongoose.model('<%= name %>', <%= name %>Schema);
