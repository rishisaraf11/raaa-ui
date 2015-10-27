'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('raaa-ui')
    .controller('CardCtrl', function($scope, $state) {
        $scope.tasks = [
            {name:'Pipeline',lastexecution:'Success',  data: [500, 300], status: 'on', type: 'REST'},
            {name:'Log Cleanup',lastexecution:'Failure',  data: [4, 5], status: 'on', type: 'REST'},
            {name:'Email',lastexecution:'', data: [10, 1], status: 'on', type: 'REST'}
        ];

        $scope.setPage = function (page) {
            $state.transitionTo(page.toLowerCase() + 'Detail', {taskType: page});
        };

        $scope.labels = ["Success", "Failure"];
        $scope.colors = ['#1EF9A1' , '#FD1F5E'];
    });
