'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('raaa-ui')
    .controller('AlertCtrl', function($scope, $state, $http, $rootScope) {
        $scope.tasks = $rootScope.tasks;
        $scope.fieldNames = [{name: 'executionStatus', display: 'Execution Status'}];
        $scope.fieldValues = [{name: 'EXECUTED'}, {name: 'FAILED'}];
        $scope.actions = [{name: 'Email'}];
        $scope.action = {name: ''};

        $scope.options = [
            //List of predefined options
        ];
        $scope.formData = {};
        //The bound value of the combo box
        $scope.comboModel = null;

        $scope.cancel = function () {
            $state.transitionTo('home');
        };

        $scope.submit = function () {
//            if ($scope.taskForm.$valid) {
            var formData = {
                taskId: $scope.task.id,
                fieldName: $scope.fieldName.name,
                fieldValue: $scope.fieldValue.name,
                notification: {
                    emailId: $scope.email,
                    body: $scope.message,
                    subject: $scope.subject
                }
            };

            $http.post($rootScope.baseUrl + 'alert', formData).success(function (response, status, headers, config) {
                //process success scenario.
                console.log("Response: " + response);
                $state.transitionTo('home');
            }).error(function (err, status, headers, config) {
                //process error scenario.
                console.log("Error: " + err);
            });
//            }

        }
    });
