(function (global){
  'use strict';

  global.angular.module('components.task', [])
    // Configuration
    .constant('ApiConfig', {
      BASE_URL: global.config.apiUrl
    })

    // Resource
    .factory('TaskModel', ['$resource', 'ApiConfig', function TaskModel($resource, ApiConfig) {

      var taskResource = $resource(ApiConfig.BASE_URL + '/tasks/:taskId',
        {
          taskId: '@_id'
        },
        {
          save: {
            method: 'PUT'
          },
          create: {
            method: 'POST'
          }
        }
      );

      return taskResource;
    }])

    // Directive viewer
    .directive('task', ['TaskModel', function Task(TaskModel) {

      function link(scope) {
        scope.editTask = function editTask() {
          if(scope.task.done) {
            return;
          }

          scope.edit(scope.task);
        };

        scope.$watch('task.done', function process() {
          scope.task.$save();
        });
      }

      return {
        restrict: 'EA',
        templateUrl: 'components/task/task.html',
        link: link,
        scope: {
          task: '=model',
          edit: '=onEdit'
        }
      };
    }])

    // Directive editor
    .directive('taskEditor', ['TaskModel', function Task(TaskModel) {

      function link(scope) {

        scope.editTitle = scope.task.title;
        scope.editBody  = scope.task.body;

        scope.save = function save() {
          scope.task.body  = scope.editBody;
          scope.task.title = scope.editTitle;
          scope.task.$save();
          scope.cancel();
        };
      }

      return {
        restrict: 'EA',
        templateUrl: 'components/task/task-editor.html',
        link: link,
        scope: {
          task: '=model',
          cancel: '=onCancel'
        }
      };
    }]);
}(window));