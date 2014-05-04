'use strict';
// create the module and name it scotchApp
    var spaApp = angular.module('spaApp', ['ngRoute', 'firebase']);

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
            .when('/firebase', {
                templateUrl : 'pages/firebase.html',
                controller  : 'firebaseController'
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
    
    
    spaApp.controller('firebaseController', function($scope, $firebase) {
		$scope.title = 'Angularjs + Firebase';
		
		//var ref = new Firebase('URL');
		//$scope.data = (ref);
		
    	var ref = new Firebase("https://luminous-fire-2217.firebaseio.com");
    	$scope.messages = $firebase(ref);
    	$scope.addMessage = function(e){
          	if(e.keyCode != 13) return;
	    	$scope.messages.$add({from: $scope.name, body: $scope.msg});
			$scope.msg = "";
    	}
    	$scope.writeID = function(o){
		  console.log(o.$id);
		}
    	//Additional functions following API documentation
    	/*
    	$scope.delMessage = function(e){
    		$scope.messages.$remove();
    		}
    	*/	
    	$scope.deleMessage = function(msg){
		  var itemRef = new Firebase(url + '/' + msg);
		  itemRef.remove();
		}
    	
    });
    
    /*
    function firebaseController($scope, $firebase) {
        $scope.title = 'Angularjs + Firebase';
        var ref = new Firebase("https://luminous-fire-2217.firebaseio.com");
        $scope.messages = $firebase(ref);

        $scope.addMessage = function(e) {
          if (e.keyCode != 13) return;
	    	$scope.messages.$add({from: $scope.name, body: $scope.msg});
          $scope.msg = "";
        };
      }
     */
    spaApp.controller('contactController', function($scope) {
        $scope.title = 'Contact';
    });