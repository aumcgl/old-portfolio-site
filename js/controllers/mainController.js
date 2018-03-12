myApp.controller('mainController', function($scope, $http){
    $scope.message = 'Intro about me';
    
     $http.get('../../projects.json').then(function (response) {
                $scope.projects= response.data;
            },
            function (error){
                console.log(error);
        });
});