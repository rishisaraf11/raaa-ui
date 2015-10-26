'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('raaa-ui')
    .controller('CardCtrl', function($scope) {
        $scope.tasks = [
            {name:'Pipeline',lastexecution:'Success',  data: [500, 300], status: 'on'},
            {name:'Log Cleanup',lastexecution:'Failure',  data: [4, 5], status: 'on'},
            {name:'Email',lastexecution:'', data: [10, 1], status: 'on'}
        ];

        $scope.labels = ["Success", "Failure"];
        $scope.colors = ['#1EF9A1' , '#FD1F5E'];
    });
