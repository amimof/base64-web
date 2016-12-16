'use strict';

angular.module('myApp').controller('HelpController', ['$scope', 'Page', function($scope, Page) {

  Page.options.title = "Usage & Documentation";

}]);
