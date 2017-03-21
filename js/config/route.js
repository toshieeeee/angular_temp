var angularTempApp = angular.module('angularTempApp',['ngRoute']);

/**********************
▼ルーティング設定
************************/

angularTempApp.config(function($routeProvider) {
    
    $routeProvider
    
    .when('/', {

        templateUrl: 'pages/main.html',  
        controller: 'mainController'

    })
    
    .when('/about', {

        templateUrl: 'pages/about.html',
        controller: 'secondController'

    })

    .when('/portfolio', {

        templateUrl: 'pages/portfolio.html',
        controller: 'secondController'

    });
    
});
