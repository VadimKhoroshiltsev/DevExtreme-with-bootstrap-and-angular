require('file?name=[name].[ext]!./index.html');
require('devextreme/css/dx.common.css');
require('devextreme/css/dx.light.css');
require('bootstrap-loader');
require('./css/jumbotron.css');

var angular = require('angular');
var angularSanitize = require('angular-sanitize');
require('devextreme/integration/angular');

require('devextreme/ui/text_box');
require('devextreme/ui/button');
var dxNotify = require('devextreme/ui/notify');

var myApp = angular.module('myApp', ['dx']);
myApp.controller("myController", function($scope) {
  $scope.email = {
    placeholder: 'Email',
    type: 'email'
  };
  $scope.password = {
    placeholder: 'Password',
    type: 'password'
  };
  $scope.signIn = {
    text: 'Sign in',
    type: 'success',
    onClick: function() {
      dxNotify('Sign in is not available in this demo', 'success', 1000);
    }
  };
  $scope.jumbotronButton = {
    text: "Learn more »",
    type: "default",
    onClick: function(){
      dxNotify('Learn more is not available in this demo', 'info', 1000);
    }
  }
  $scope.viewDetailButton = {
    text: "View details »",
    onClick: function(){
      dxNotify('View details is not available in this demo', 'view-detail', 1000);
    }
  };
});

angular.bootstrap(document, ['myApp']);
