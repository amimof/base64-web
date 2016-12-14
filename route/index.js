var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.argument('route_name', { type: String, required: true });
  },
  writing: function() {
    this.fs.copyTpl(
      this.templatePath('route.js'),
      this.destinationPath('app/routes/'+this.route_name.toLowerCase()+'.js'),
      { name: this.route_name, namec: _.capitalize(this.route_name), namel: this.route_name.toLowerCase() }
    );
    this.log("Add this route to 'app/config/express.js' with the following:");
    this.log("require('../routes/"+this.route_name.toLowerCase()+"')(router);");
  }
});
