'use strict';

angular.module('myApp').controller('HomeController', ['$scope', 'Page', '$base64', '$location', function($scope, Page, $base64, $location) {

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

  if(typeof $location.search().decode !== 'undefined') {
    $scope.right.message = $location.search().decode;
    $scope.rightChanged();
  }

  if(typeof $location.search().encode !== 'undefined') {
    $scope.left.message = $location.search().encode;
    $scope.leftChanged();
  }

             
  $('.ui.dropdown').dropdown();  

}]);
