var myApp = angular.module('myApp',['ngRoute']);

/**********************
▼ルーティング設定
************************/

myApp.config(function($routeProvider) {
    
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
