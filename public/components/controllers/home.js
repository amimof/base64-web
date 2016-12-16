'use strict';

angular.module('myApp').controller('HomeController', ['$scope', 'Page', '$base64', function($scope, Page, $base64) {

  Page.options.title = "Encode & Decode"

  $scope.left = {
    message: null
  };

  $scope.right = {
    message: null
  }

  $scope.leftChanged = function() {
    $scope.right.message = $base64.encode(unescape(encodeURIComponent($scope.left.message)));
  };

  $scope.clearLeft = function() {
    $scope.left.message = "";
    $scope.leftChanged();
  };

  $scope.rightChanged = function() {
    $scope.left.message = $base64.decode($scope.right.message);
  };

  $scope.clearRight = function() {
    $scope.right.message = "";
    $scope.rightChanged();
  }
             
  $('.ui.dropdown').dropdown();  

}]);
