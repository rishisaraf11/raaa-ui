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
        'ngComboBox',
        'angular-loading-bar'
    ])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

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
                        return $http.get('/api/task');
                    },
                    stats: function ($http) {
                        return $http.get('/api/task/stats');
                    }
                }
            })
             .state('NewAlert', {
                 url: "/new/alert",
                 templateUrl: "partials/create-alert.html",
                 controller: 'AlertCtrl',
                 ncyBreadcrumb: {
                     label: 'New Alert'
                 }
             })
            .state('NewTaskForm', {
                url: "/new/:taskType",
                templateUrl: "partials/new-task.html",
                controller: 'NewTaskCtrl',
                ncyBreadcrumb: {
                    label: 'New Task'
                }
            }).state('TaskDetail', {
                url: "/detail/:taskType/:id",
                templateUrl: "partials/task-detail.html",
                controller: 'TaskDetailCtrl',
                resolve: {
                    taskDetail: function ($http, $stateParams) {
                        return $http.get('/api/task/' + $stateParams.id);
                    }
                }
            });
    }])
    .run(['$state', '$rootScope', function ($state, $rootScope) {
        $state.transitionTo('home');
        $rootScope.cronInitData = "* * * * *";
        $rootScope.baseUrl = "/api/";
    }]);


