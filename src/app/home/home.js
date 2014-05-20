(function (global){
  'use strict';

  global.angular.module('app.home', ['components.task'])

  .config(['$routeProvider', function config($routeProvider) {

    $routeProvider.when('/home', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl'
    });
  }])


  .controller('HomeCtrl', ['$scope', 'TaskModel', function HomeCtrl($scope, TaskModel) {
    // No task is edited by default
    $scope.currentlyEdited = null;

    $scope.editTask = function editTask(task) {
      $scope.currentlyEdited = task;
    };

    $scope.cancelEdition = function cancelEdition() {
      $scope.currentlyEdited = null;
    };

    $scope.addTask = function addTask() {
      $scope.tasks.push({
        title: $scope.newTaskTitle,
        body: '',
        done: false
      });

      $scope.newTaskTitle = '';
    };

    $scope.getTasks = function getTasks() {
      $scope.tasks = TaskModel.query();
    };

    $scope.getTasks();
  }]);
}(window));