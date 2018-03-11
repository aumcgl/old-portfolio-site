myApp.controller('portController', function($scope, $http) {
    
    $scope.test = "TEST PHRASE";
    
    $http.get('../../projects.json').then(function (response) {
                $scope.projects= response.data;
            },
            function (error){
                console.log(error);
        });

});

