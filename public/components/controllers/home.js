'use strict';

angular.module('myApp').controller('HomeController', ['$scope', 'Page', 'Config', '$base64', function($scope, Page, Config, $base64) {

  Page.options.title = "Encode & Decode"

  $scope.left = {
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam eleifend luctus. In hac habitasse platea dictumst. Mauris at placerat dui. Aenean facilisis at diam vel sodales. Quisque vestibulum vehicula enim, at aliquam sapien posuere eu. Aenean faucibus mi et risus tincidunt faucibus. Quisque scelerisque libero dolor, at euismod nisi imperdiet eu. Ut at efficitur leo."
  };

  $scope.right = {
    message: null
  }

  $scope.leftChanged = function() {
    $scope.right.message = $base64.encode($scope.left.message);
  };

  $scope.rightChanged = function() {
    $scope.left.message = $base64.decode($scope.right.message);
  };
             
  $('.ui.dropdown').dropdown();  

}]);
