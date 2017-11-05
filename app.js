var myApp = angular.module("myApp", ['ngRoute']);


myApp.config(function($routeProvider, $locationProvider) {
		$routeProvider
   
    .when('/', {
         templateUrl : 'html/home.html',
         controller  : 'mainController'
         })
    .when('/blog', {
         templateUrl : 'html/blog.html',
         controller  : 'blogController'
         })
    .when('/resume', {
         templateUrl : 'html/ccv.html',
         controller  : 'mainController'
         })
    .when('/contact', {
         templateUrl : 'html/contact.html',
         controller  : 'mainController'
         })
    .when('/index.html', { 
      redirectTo: '/' 
        });
    $locationProvider.html5Mode(true);
});

myApp.controller('mainController', function($scope){
    $scope.message = 'Home Page';
});

