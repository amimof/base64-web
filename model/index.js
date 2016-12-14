var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    this.argument('model_name', { type: String, required: true });
  },
  writing: function() {
    this.fs.copyTpl(
      this.templatePath('model.js'),
      this.destinationPath('app/models/'+this.model_name+'.js'),
      { name: this.model_name }
    );
  }
});
