var myApp = angular.module("myApp", ['ngRoute', 'ngMaterial']);


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
         controller  : 'ccvController'
         })
    .when('/contact', {
         templateUrl : 'html/contact.html',
         controller  : 'contactController'
         })
    .when('/portfolio', {
         templateUrl : 'html/portfolio.html',
         controller  : 'portController'
         })
    .when('/blogRedirect',{
         templateUrl : 'html/redirect.html'
        })
    .when('/html/index.html', { 
      redirectTo: '/' 
        });
    
    $locationProvider.html5Mode(true);
    
});

