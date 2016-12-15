'use strict';

angular.module('myApp').directive('appLoader', function($rootScope) {
 	return {
 		restrict: 'A',
    transclude: true,
 	  templateUrl: 'components/views/partials/app-loader.html',
 		link: function(scope, element, attrs) {
      scope.$on("loader_show", function() {
        console.log("show loader");
        element[0].hidden = false;
      });
      return scope.$on("loader_hide", function() {
        console.log("hide loader");
        element[0].hidden = true;
      });
   	}
 	};
});
