var app = angular.module('app',['ui.router'])

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('firstMessage',{
        url: "/first-msg/:a/:b",
        templateUrl: 'msg1.html',
        controller: 'msg1Controller'
    })
    .state('CfirstMessage',{
        url: "/c/first-msg/{a}/{b}",
        templateUrl: 'msg1.html',
        controller: 'msg1Controller'
    })
    .state('secondMessage',{
        url: "/second-msg/{a:[0-9]+}/{b}",
        templateUrl: 'msg1.html',
        controller: 'msg1Controller'
    })
    .state('thirdMessage',{
        url: "/third-msg/:a",//* a paramter is optional by default,one or no parameter provided
        templateUrl: 'msg1.html',
        controller: 'msg1Controller'
    })
    .state('forthMessage',{//* this is used only for ui-sref 
        url: "/forth-msg",
        templateUrl: 'msg1.html',
        controller: 'msg1Controller',
        params: {
            a: {value: "1"},
            b: {value: "2"}
        }
    })
    .state('fifthMessage',{// * required two slashes at trailing for the href to get the default value
        url: "/fifth-msg/:a/:b",
        templateUrl: 'msg1.html',
        controller: 'msg1Controller',
        params: {
            a: {value: "1"},//default value
            b: {value: "2"} //default value
        }
    })
    .state('sixMessage',{// * not required two slashes at trailing for the href to get the default value beacuse squash
        url: "/six-msg/:a/:b",
        templateUrl: 'msg1.html',
        controller: 'msg1Controller',
        params: {
            a: {value: "1",squash:true},
            b: {value: "2",squash: true}
        }
    })
    .state('sevenMessage',{// *  squash value to take default value
        url: "/seven-msg/:a/:b",
        templateUrl: 'msg1.html',
        controller: 'msg1Controller',
        params: {
            a: {value: "1",squash:'-'},
            b: {value: "2",squash: '~'}
        }
    })
    .state('eighthMessage',{
        url: "/eighth-msg?a&b",
        templateUrl: 'msg1.html',
        controller: 'msg1Controller',
        
    })
    .state('ninthMessage',{
        url: "/ninth-msg?a&b",
        templateUrl: 'msg1.html',
        controller: 'msg1Controller',
        params: {
            a: {value: "1"},
            b: {array: true}
        }
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

app.controller('msg1Controller',['$scope','$stateParams',function($scope,$stateParams){
    $scope.a = $stateParams.a;
    $scope.b = $stateParams.b;
}])




app.controller('msg3Controller',['$scope',function($scope){
    $scope.msg = "Go Now!";
}])
