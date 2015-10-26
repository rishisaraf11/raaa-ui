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


angular.module('raaa-ui')
    .controller('RestTaskCtrl', function($scope, $stateParams) {
        $scope.taskType = $stateParams.taskType;
        $scope.formData = {
            method: 'GET',
            headers: [],
            params:[]
        };

        $scope.addHeader = function(){
            $scope.formData.headers.push({'header':'value'});
        };

        $scope.removeHeader = function(index){
            $scope.formData.headers.splice(index, 1);
        };

        $scope.addParam = function(){
            $scope.formData.params.push({'parameter':'value'});
        };

        $scope.removeParam = function(index){
            $scope.formData.params.splice(index, 1);
        };
    });
