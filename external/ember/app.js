// create the module and name it scotchApp
    var spaApp = angular.module('spaApp', ['ngRoute']);

    // configure our routes
    spaApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the documents page
            .when('/doc', {
                templateUrl : 'pages/documents.html',
                controller  : 'docController'
            })
            
            // route for the download page
            .when('/download', {
                templateUrl : 'pages/download.html',
                controller  : 'downloadController'
            })
            
            // route for the typography page
            .when('/typography', {
                templateUrl : 'pages/typography.html',
                controller  : 'typographyController'
            })
            
            // route for the form elements page
            .when('/form', {
                templateUrl : 'pages/form.html',
                controller  : 'formController'
            })
            
            // route for the download page
            .when('/icons', {
                templateUrl : 'pages/icons.html',
                controller  : 'iconsController'
            })
            
            // route for the download page
            .when('/table', {
                templateUrl : 'pages/table.html',
                controller  : 'tableController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    spaApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.title = 'This the Home page!';
    });

    spaApp.controller('docController', function($scope) {
        $scope.title = 'Documentation';
    });

    spaApp.controller('downloadController', function($scope) {
        $scope.title = 'Download';
    });
    
    spaApp.controller('typographyController', function($scope) {
        $scope.title = 'Typography';
    });
    
    spaApp.controller('formController', function($scope) {
        $scope.title = 'Form elements';
    });
    
    spaApp.controller('iconsController', function($scope) {
        $scope.title = 'Icons';
    });
    
    spaApp.controller('tableController', function($scope) {
        $scope.title = 'Table elements';
    });
    spaApp.controller('contactController', function($scope) {
        $scope.title = 'Contact';
    });