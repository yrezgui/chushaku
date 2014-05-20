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

    $scope.onBlur = function onBlur() {
      $scope.inputHelp = false;
    };

    $scope.onFocus = function onFocus() {
      $scope.inputHelp        = true;
      $scope.currentlyEdited  = null;
    };

    $scope.showSearch = function showSearch() {
      $scope.taskFilter = '';
      $scope.displaySearch = true;
    };

    $scope.showAddTask = function showAddTask() {
      $scope.newTaskTitle   = '';
      $scope.taskFilter     = '';
      $scope.displaySearch  = false;
    };

    $scope.addTask = function addTask() {
      if(!$scope.newTaskTitle) {
        return;
      }
      
      var newTask = new TaskModel({
        title: $scope.newTaskTitle,
        body: '',
        done: false
      });
      
      var promise = newTask.$create();
      promise.then($scope.getTasks);

      $scope.newTaskTitle = '';
    };

    $scope.getTasks = function getTasks() {
      $scope.tasks = TaskModel.query();
    };

    $scope.getTasks();
  }]);
}(window));