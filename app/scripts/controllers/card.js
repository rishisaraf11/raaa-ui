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
            {name:'Pipeline',lastexecution:'Success',  data: [500, 300]},
            {name:'Log Cleanup',lastexecution:'Failure',  data: [4, 5]},
            {name:'Email',lastexecution:'Success', data: [10, 1]}
        ];

        $scope.labels = ["Success", "Failure"];
        $scope.colors = ['#1EF9A1' , '#FD1F5E'];
    });
