---
layout: post
title: "Angular JS $http service example"
published: true
---

<iframe src="/external/angularjs/index.html" width="720" height="570" style="display:block; margin: 0 auto;">&nbsp;</iframe>

I've used $http service with GET method to pull external JSON request. 

{% highlight ruby %}
var jobBoard = angular.module('jobBoard', ['ui-bootstrap']);
	function MyAppController($scope, $http, $sce)
	{
	$http.jsonp('https://jobs.github.com/positions.json?callback=JSON_CALLBACK' ).then( function ( response ) {
	    $scope.jobs = response.data;
	    $scope.trustedJsonRequest = function() {
	      return $sce.trustAsHtml($scope.jobs);
	    };
	    $scope.totalJobs = $scope.jobs.length;
		$scope.clearFilter = function() {
			$scope.query = '';
		};
		$scope.nb = $filter('filter')($scope.jobs, filterExpr).length;
	});
	}
{% endhighlight %}

