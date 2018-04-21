myApp.controller('mainController', function($scope, $http){
    $scope.message = 'Welcome to my portfolio! I regret to inform you that my portfolio is still in its final stages of development. Thank you for your time visiting my page, and I hope you will visit again in the coming days as the website is completed. For the meantime, please check out my Resume page, my Blog and also go to my Contact page to see my other social media accouts! ';
    
     $http.get('../../projects.json').then(function (response) {
                $scope.projects= response.data;
            },
            function (error){
                console.log(error);
        });
});