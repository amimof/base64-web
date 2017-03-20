'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'base64',
  'angular-clipboard',
]).
run(['$rootScope', 'Page', function($rootScope, Page) {
  $rootScope.$on( "$routeChangeStart", function(event, next, current) {
    Page.error = null;
    Page.error_header = null;
  });
}]).
config(['$httpProvider', function($httpProvider) {
  // HTTP interceptor
  $httpProvider.interceptors.push(function($q, $rootScope, Page) {
    return {
      'request': function(config) {
        $rootScope.$broadcast("loader_show");
        if(sessionStorage.getItem('accessToken')) {
          config.headers.authorization = sessionStorage.getItem('accessToken');
        }
        return config || $q.when(config);
      },
     'requestError': function(rejection) {
        $rootScope.$broadcast("loader_hide");
        return $q.reject(rejection);
      },
      'response': function(response) {
        $rootScope.$broadcast("loader_hide");
        return response;
      },
     'responseError': function(rejection) {
        $rootScope.$broadcast("loader_hide");
        if(rejection.status == 401 && rejection.data.error.code == "LOGIN_FAILED") {
          Page.error_header = "Login failed";
          Page.error = "Username/Password incorrect";
        } else if (rejection.status == 401 && rejection.data.error.code == "AUTHORIZATION_REQUIRED") {
          Page.error_header = "Access denied";
          Page.error = "You do not have the required rights to access the requested resource"
        } else {
          Page.error = error;
        }
        return $q.reject(rejection);
      }
    };
  });
}]).
config(['$routeProvider', function($routeProvider) {
  // Routes
  $routeProvider.when('/home', {
    templateUrl: 'components/views/home.html',
    controller: 'HomeController'
  });
  $routeProvider.when('/help', {
    templateUrl: 'components/views/help.html',
    controller: 'HelpController'
  });
  $routeProvider.otherwise({
    templateUrl: 'components/views/home.html',
    controller: 'HomeController'
  });

}]).
controller('MainController', ['$scope', 'Page', '$http', function($scope, Page, $http) {
  $scope.Page = Page;
}]);
