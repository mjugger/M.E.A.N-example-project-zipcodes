var app = angular.module('zipcodes',['ngResource','ngRoute'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);
	console.log('$routeProvider',$routeProvider,'$locationProvider',$locationProvider);
	$routeProvider
		.when('/asdf',{
			templateUrl:'partials/test.jade'
		});
}]);