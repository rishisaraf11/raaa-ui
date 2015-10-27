'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */

angular.module('raaa-ui')
    .controller('NewTaskCtrl', function($scope, $stateParams, $state, $http, $rootScope) {
        $scope.cronTagConfig = {
            options: {
                allowWeek : true,
                allowMonth : true,
                allowYear : true
            }
        };
        $scope.dateTimeNow = function() {
            $scope.date = new Date();
        };
        $scope.hourStep = 1;
        $scope.minuteStep = 15;

        $scope.maxDate = new Date('2020-06-22');

        $scope.dateOptions = {
            startingDay: 1,
            showWeeks: false
        };

        $scope.taskType = $stateParams.taskType;
        $scope.formData = {
            type: ($scope.taskType).toUpperCase(),
            method: 'GET',
            expressionType: 'cron',
            expression: '',
            headers: [],
            params:[]
        };

        $scope.addHeader = function(){
            $scope.formData.headers.push({'key':'header-name', 'value':'value'});
        };

        $scope.removeHeader = function(index){
            $scope.formData.headers.splice(index, 1);
        };

        $scope.addParam = function(){
            $scope.formData.params.push({'key':'param-name', 'value':'value'});
        };

        $scope.removeParam = function(index){
            $scope.formData.params.splice(index, 1);
        };

        $scope.cancel = function () {
            $state.transitionTo('home');
        }

        $scope.submit = function () {
            $http.post($rootScope.baseUrl + 'task', $scope.formData).success(function(response, status, headers, config){
                //process success scenario.
                console.log("Response: " + response);
                }).error(function(err, status, headers, config){
                //process error scenario.
                console.log("Error: " + err);
            });

        }
    });
