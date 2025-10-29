var app = angular.module("app",[])

app.controller('emp',["$scope",function($scope){
    $scope.msg = "This is my directive templates";
    $scope.msg2 = "This is second message "
    $scope.msg3 = "This is third message "

}])
// * when we are writting the directive names it should follow the camelcase standard
// * Component Directive
app.directive('myInfoMsg',function(){
    return {
        restrict: "EA",
        template: "<strong>{{msg}}</strong>"
    };
})

app.directive('myInfoMsg2',function(){
    return {
        templateUrl: "my-ifo-msg2.html"
    };
})

app.directive('myInfoMsg3',function(){
    return {
        templateUrl: "template.html"
    };
})