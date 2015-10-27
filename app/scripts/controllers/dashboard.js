'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('raaa-ui')
  .controller('DashboardCtrl', function($scope, $state, tasks) {
        $scope.tasktypes = [{"name": "Rest"}, {"name": "Command"}, {"name": "Email"}, {"name": "Torrent"}];
        $scope.tasks = tasks.data;

        $scope.setPage = function (page) {
            $state.transitionTo(page + 'Form', {taskType: page});
        };

        $scope.setDetailPage = function (page) {
            $state.transitionTo(page.toLowerCase() + 'Detail', {taskType: page});
        };

        $scope.labels = ["Success", "Failure"];
        $scope.colors = ['#1EF9A1' , '#FD1F5E'];
  });
