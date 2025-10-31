var app = angular.module("empModule", []);
app.controller("digest", ["$scope","$rootScope",function ($scope, $rootScope) {
    $scope.a = 10;
    $scope.b = 23;
    $scope.cal = function(){
      $scope.sum = parseInt($scope.a)+parseInt($scope.b)
    }

}]);

var btnClick = function(){
  var $scope = angular.element(document.getElementById("div1")).scope();
  $scope.sum = Number($scope.a)+Number($scope.b)
  $scope.$apply();
  
}

var btnClick2 = function(){
  var $scope = angular.element(document.getElementById("div1")).scope();
  
  $scope.$apply(function(){
  $scope.sum = Number($scope.a)+Number($scope.b)

  });
  
}