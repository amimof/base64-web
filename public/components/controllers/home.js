'use strict';

angular.module('myApp').controller('HomeController', ['$scope', 'Page', '$base64', '$location',  function($scope, Page, $base64, $location) {

  Page.options.title = "Encode & Decode";
  
  $scope.modes = [
    { "name": "JSON", "value": "ace/mode/json" }, 
    { "name": "YAML", "value": "ace/mode/yaml" },
    { "name": "XML", "value": "ace/mode/xml" },
    { "name": "Properties", "value": "ace/mode/properties" },
    { "name": "JavaScript", "value": "ace/mode/javascript" },
    { "name": "Apache Conf", "value": "ace/mode/apache_conf" },
    { "name": "AsciiDoc", "value": "ace/mode/asciidoc" },
    { "name": "Markdown", "value": "ace/mode/markdown" },
    { "name": "Makefile", "value": "ace/mode/makefile" },
    { "name": "INI", "value": "ace/mode/ini" },
    { "name": "Gherkin", "value": "ace/mode/gherkin" },
    { "name": "BatchFile", "value": "ace/mode/batchfile" },
    { "name": "Plain Text", "value": "ace/mode/text" },
  ];
  $scope.activeMode = $scope.modes[0];

  $scope.left = { message: "", silent: false };
  $scope.right = { message: "", silent: false };

  var leftEditor = ace.edit("left-editor");
  leftEditor.setTheme("ace/theme/chrome");
  leftEditor.getSession().setMode("ace/mode/json");
  leftEditor.$blockScrolling = 'Infinity';
  leftEditor.getSession().on('change', function(e) {
    if($scope.left.silent) return;
    $scope.leftChanged();
  });

  var rightEditor = ace.edit('right-editor');
  rightEditor.setTheme("ace/theme/chrome");
  rightEditor.getSession().setMode("text");
  rightEditor.$blockScrolling = 'Infinity';
  rightEditor.session.setUseWrapMode(true);
  rightEditor.renderer.setShowGutter(false);
  rightEditor.setShowPrintMargin(false);
  rightEditor.setHighlightActiveLine(false);
  rightEditor.getSession().on('change', function(e) {
    if($scope.right.silent) return;
    $scope.rightChanged();
  });


  $scope.leftChanged = function() {
      $scope.left.message = leftEditor.getSession().getValue();
      $scope.right.message = $base64.encode(unescape(encodeURIComponent($scope.left.message)));
      $scope.right.silent = true;
      rightEditor.getSession().setValue($scope.right.message);
      $scope.right.silent = false;
  };

  $scope.rightChanged = function() {
      $scope.right.message = rightEditor.getSession().getValue();
      $scope.left.message = $base64.decode($scope.right.message);
      $scope.left.silent = true
      leftEditor.getSession().setValue($scope.left.message);
      $scope.left.silent = false;
  };

  $scope.clearLeft = function() {
    leftEditor.getSession().setValue("");
    $scope.left.message = "";
    $scope.leftChanged();
  };

  $scope.clearRight = function() {
    rightEditor.getSession().setValue("");
    $scope.right.message = "";
    $scope.rightChanged();
  }

  $scope.toggleGutter = function() {
    console.log(leftEditor.renderer)
  };

  $scope.setMode = function(i) {
    $scope.activeMode = $scope.modes[i];
    leftEditor.session.setMode({
      path: $scope.activeMode.value
    });
  };

  if(typeof $location.search().decode !== 'undefined') {
    $scope.right.message = $location.search().decode;
    rightEditor.getSession().setValue($scope.right.message);
    $scope.rightChanged();
  }

  if(typeof $location.search().encode !== 'undefined') {
    $scope.left.message = $location.search().encode;
    leftEditor.getSession().setValue($scope.left.message);
    $scope.leftChanged();
  }

  $('.ui.dropdown')
    .dropdown()
  ;

}]);
