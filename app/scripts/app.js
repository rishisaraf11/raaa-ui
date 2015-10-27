'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
    .module('raaa-ui', [
        'ngRoute',
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'ui.router',
        'chart.js',
        'uiSwitch',
        'ui.bootstrap.datetimepicker',
        'angular-cron-jobs',
        'angular-loading-bar'
    ])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/all-actions.html",
                controller: 'DashboardCtrl',
                resolve: {
                    tasks: function ($http) {
                        return $http.get('http://127.0.0.1/api/task');
                    }
                }
            })
            .state('RestForm', {
                url: "/new/:taskType",
                templateUrl: "partials/rest-task.html",
                controller: 'NewTaskCtrl'
            })
            .state('CommandForm', {
                url: "/new/:taskType",
                templateUrl: "partials/rest-task.html",
                controller: 'NewTaskCtrl'
            })
            .state('EmailForm', {
                url: "/new/:taskType",
                templateUrl: "partials/rest-task.html",
                controller: 'NewTaskCtrl'
            })
            .state('TorrentForm', {
                url: "/new/:taskType",
                templateUrl: "partials/rest-task.html",
                controller: 'NewTaskCtrl'
            }).state('restDetail', {
                url: "/detail/:taskType",
                templateUrl: "partials/rest-task.html",
                controller: 'NewTaskCtrl'
            });
    }])
    .run(['$state', '$rootScope', function ($state, $rootScope) {
        $state.transitionTo('home');
        $rootScope.cronInitData = "* * * * *";
        $rootScope.baseUrl = "http://127.0.0.1/api/";
    }]);


