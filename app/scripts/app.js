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
        'ncy-angular-breadcrumb',
        'angular-loading-bar'
    ])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider, $breadcrumbProvider) {

        $urlRouterProvider.otherwise("/home");
//        $breadcrumbProvider.setOptions({
//            prefixStateName: 'home',
//            template: 'bootstrap2'
//        });

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/all-actions.html",
                controller: 'DashboardCtrl',
                ncyBreadcrumb: {
                    label: 'DashBoard'
                },
                resolve: {
                    tasks: function ($http) {
                        return $http.get('http://127.0.0.1/api/task');
                    }
                }
            })
            .state('RestForm', {
                url: "/new/:taskType",
                templateUrl: "partials/rest-task.html",
                controller: 'NewTaskCtrl',
                ncyBreadcrumb: {
                    label: 'Rest Task'
                }
            })
            .state('CommandForm', {
                url: "/new/:taskType",
                templateUrl: "partials/command-task.html",
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
                url: "/detail/:taskType/:id",
                templateUrl: "partials/rest-task-detail.html",
                controller: 'TaskDetailCtrl',
                resolve: {
                    taskDetail: function ($http, $stateParams) {
                        return $http.get('http://127.0.0.1/api/task/' + $stateParams.id);
                    }
                }
            });
    }])
    .run(['$state', '$rootScope', function ($state, $rootScope) {
        $state.transitionTo('home');
        $rootScope.cronInitData = "* * * * *";
        $rootScope.baseUrl = "http://127.0.0.1/api/";
    }]);


