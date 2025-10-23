var app = angular.module("app",[]);

app.controller("call",["$scope", function($scope){
    $scope.a=10;
    $scope.b = 20;

    $scope.doSum = function(){
        $scope.sum = parseInt($scope.a)+parseInt($scope.b);
    }
    $scope.reset = function(){
        $scope.a=0;
        $scope.b=0;

    }
}])