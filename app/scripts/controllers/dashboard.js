'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('raaa-ui')
  .controller('DashboardCtrl', function($scope, $state, tasks, stats, $http, $rootScope, alerts) {
        $scope.tasktypes = [{"name": "Rest"}, {"name": "Command"}, {"name": "Email"}, {"name": "Torrent"}];
        $scope.tasks = tasks.data;
        $scope.alerts = alerts.data;
        $rootScope.alerts = alerts.data;
        $scope.alertSize = alerts.data.length;
        $rootScope.alertSize = alerts.data.length;
        $rootScope.tasks = tasks.data;
        $scope.stats = stats.data;
        $scope.stats.passPer = ($scope.stats.passExecution/$scope.stats.totalExecution)*100;
        $scope.stats.failPer = ($scope.stats.failExecution/$scope.stats.totalExecution)*100;
//        $scope.events = [
//            {title: 'All Day Event',start: new Date(y, m, 1)},
//            {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)}
//        ];
        $scope.eventSources = [];

        $scope.view = 'detail';

        $scope.setPage = function (page, taskType) {
            $state.transitionTo(page, {taskType: taskType.name});
        };

        $scope.setDetailPage = function (page, id) {
            $state.transitionTo('TaskDetail', {taskType: page, id: id});
        };

        $scope.labels = ["Success", "Failure"];
        $scope.colors = ['#1EF9A1' , '#FD1F5E'];

        $scope.taskActiveFlag = function (taskId, value) {
            $http.get('/api/task/activate/' + taskId + "/" + value).success(function (response, status, headers, config) {
                //process success scenario.
                $scope.refreshTasks();
            }).error(function (err, status, headers, config) {
                //process error scenario.
                console.log("Error: " + err);
            });
        };

        $scope.refreshTasks = function () {
            $http.get('/api/task').success(function (response, status, headers, config) {
                //process success scenario.
                $scope.tasks = response;
            }).error(function (err, status, headers, config) {
                //process error scenario.
                console.log("Error: " + err);
            });
        };

        $scope.switchView = function (view) {
            $scope.view = view;
            if (view == 'detail') {
                $scope.refreshTasks();
            }
        }
  });
