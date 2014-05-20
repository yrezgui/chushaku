(function (global){
  'use strict';

  global.angular.module('chushakuApp', [
    'ngAnimate',
    'ngSanitize',
    'ngRoute',
    'ngResource',
    'components.task',
    'app.home'
  ])

    .config(['$routeProvider', function config($routeProvider) {

      $routeProvider.otherwise({
        redirectTo: '/home'
      });
    }]);
}(window));