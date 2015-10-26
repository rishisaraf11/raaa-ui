'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('raaa-ui')
    .controller('NewTaskCtrl', function($scope, $stateParams) {
        $scope.taskType = $stateParams.taskType;
        $scope.addTask = function () {

        }
    });
