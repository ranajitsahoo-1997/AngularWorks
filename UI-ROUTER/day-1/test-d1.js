var app = angular.module('app',['ui.router'])

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('firstMessage',{
        url: "/first-msg",
        templateUrl: 'msg1.html',
        controller: 'msg1Controller'
    })
    .state('secondMessage',{
        url: "/second-msg",
        templateUrl: 'msg2.html',
        controller: 'msg2Controller'
    })
    .state('root',{
        url: "/",
        template: "<strong>You are at root folder click anything else {{msg}}</strong>",
        controller: 'msg3Controller'
    })
    .state('wrong',{
        url: "/wrong",
        template: "<strong>You have provided wrong URL!!! Try to click on available one</strong>"
        
    })
    // .state('noroute',{
    //     url: '*path',
    //     template: '<strong>no Route available try clicking on link</strong>'
    // })
    $urlRouterProvider.otherwise('/wrong');
}])

app.controller('msg1Controller',['$scope',function($scope){
    $scope.a = 10;
    $scope.b = 20;
}])


app.controller('msg2Controller',['$scope',function($scope){
    $scope.c = 10;
    $scope.d = 20;
}])

app.controller('msg3Controller',['$scope',function($scope){
    $scope.msg = "Go Now!";
}])
