'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('raaa-ui')
  .controller('DashboardCtrl', function($scope) {
        $scope.tasktypes = [{"name": "Rest"}, {"name": "Command"}, {"name": "Email"}]
  });
