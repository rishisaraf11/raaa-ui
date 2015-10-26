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
        'angular-loading-bar'
    ])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/all-actions.html",
                controller: 'DashboardCtrl'
            })
            .state('newTask', {
                url: "/newTask/:taskType",
                templateUrl: "partials/new-task.html",
                controller: 'NewTaskCtrl'
            });


    }]);


