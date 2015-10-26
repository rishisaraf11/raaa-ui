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
            .state('RestForm', {
                url: "/new/:taskType",
                templateUrl: "partials/rest-task.html",
                controller: 'RestTaskCtrl'
            })
            .state('CommandForm', {
                url: "/new/:taskType",
                templateUrl: "partials/rest-task.html",
                controller: 'RestTaskCtrl'
            })
            .state('EmailForm', {
                url: "/new/:taskType",
                templateUrl: "partials/rest-task.html",
                controller: 'RestTaskCtrl'
            })
            .state('TorrentForm', {
                url: "/new/:taskType",
                templateUrl: "partials/rest-task.html",
                controller: 'RestTaskCtrl'
            });
    }])
    .run(['$state', function ($state) {
        $state.transitionTo('home');
    }]);


