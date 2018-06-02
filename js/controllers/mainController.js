myApp.controller('mainController', function($scope, $http){
    $scope.message = 'Welcome to my portfolio! Thank you for your time visiting my page! I am adding new features and content everyday, such as displaying recent blog posts from my wordpress and adding more and more projects that Im working on, so please keep checking in! Please check out my portfolio to see what Ive been working on!';
    
     $http.get('../../projects.json').then(function (response) {
                $scope.projects= response.data;
            },
            function (error){
                console.log(error);
        });
});

$(document).ready(function(){
    $(".toggler").click(function(e){
        e.preventDefault();
        $('.cat'+$(this).attr('data-prod-cat')).toggle();
    });
});