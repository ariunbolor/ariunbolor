'use strict';

	// spaApp module created with 2 dependencies including ngRoute and firebase
    var spaApp = angular.module('spaApp', ['ngRoute', 'firebase']);

	
    // route configurations
    
    /* note for undertanding routeProvide
    
    app.config(function($routePriver){
	    $routeProvide
	    .when('/path', {
			teplateUrl: 'template file',
			controller: 'controller name'    
	    });
    });
    */
    
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
            
            // route for the authentication page
            .when('/authentication', {
                templateUrl : 'pages/authentication.html',
                controller  : 'authenticationController'
            })
            
            // route for the firebase page
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
    
    //Controller for XML Reader
    
spaApp.controller("formController", ['$scope', 'FeedService', function ($scope, Feed) {

$scope.loadButonText = "Load";
$scope.loadFeed = function (e) {

	Feed.parseFeed($scope.feedSrc).then(function (res) {
	$scope.loadButonText = angular.element(e.target).text();
	$scope.feeds = res.data.responseData.feed.entries;

});

} }]); 

//For repeatitive usage 

spaApp.factory('FeedService', ['$http', function ($http) {
	return {
	parseFeed: function (url) {
	return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&amp;num=50&amp;callback=JSON_CALLBACK&amp;q=' + encodeURIComponent(url));
	}
	} 
}]); 

    /*
    
    spaApp.controller('formController', ['$scope','FeedService', function ($scope,Feed) { 
        $scope.title = 'RSS Reader';
          $scope.loadButonText="Select source";
			    $scope.loadFeed=function(e){        
			        Feed.parseFeed($scope.feedSrc).then(function(res){
			            $scope.loadButonText=angular.element(e.target).text();
			            $scope.feeds=res.data.responseData.feed.entries;
			        });
			    }
			}]);
			
spaApp.factory('FeedService',['$http',function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);
    */
    //Controller for Twitter Authentication
    spaApp.controller('authenticationController', function($scope, $firebase) {
		/*
    	var followRef = new Firebase('https://angularjstodo.firebaseio.com/');
		var auth = new FirebaseSimpleLogin(followRef, function(error, user) {
			auth.login('twitter', {
			  rememberMe: true;
			});
		});
		*/
        $scope.title = 'authentication';
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
    	
    	//Delete entire comment
    	
    	$scope.delMessage = function(e){
    		$scope.messages.$remove();
    		}
    	
    });
    
    spaApp.controller('contactController', function($scope) {
        $scope.title = 'Contact';
    });