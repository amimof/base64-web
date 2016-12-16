'use strict';

var app = angular.module('myApp');

app.factory('Page', ['$location', '$window', function($location, $window) {

  var page =  {

    options: {
      title: 'Default Title',
      showSidenav: true,
      showToolbar: true,
      refreshable: false,
      refreshAction: function() {},
    },
    error: null,
    loading: false,
    isLoggedIn: function() {
      if(sessionStorage.getItem('accessToken') != null) {
        return true
      } else {
        return false
      }
    },
    navigateTo: function(path) {
      $location.path(path);
    },
    href: function(url) {
      $window.location.href = url; // This needs to be fixed
    },
    goBack: function() {
      $window.history.back();
    }

  };

  return page
}]);
