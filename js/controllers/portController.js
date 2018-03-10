myApp.controller('portController', function($scope, $http) {
    
    $scope.test = "TEST PHRASE";
    
    $http.get('./projects.json').then(function(data) {
       $scope.projects = data;
   });

});

