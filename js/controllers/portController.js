myApp.controller('portController', function($scope, $http) {
    
    $scope.test = "TEST PHRASE";
    
    $http.get('www.austin-mcg.com/projects.json').then(function(data) {
       $scope.projects = JSON.parse(data);
   });

});

