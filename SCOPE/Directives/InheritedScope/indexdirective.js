var app = angular.module("app", []);

app.controller("sample", [
  "$scope",
  function ($scope) {
    $scope.a = 10;
    $scope.b = 20;
    $scope.changeValueB = function () {
      $scope.b = 50;
    };
  },
]);
app.directive("message", function(){
  return {
    templateUrl: "info-msg.html",
    scope: true,

    controller: function($scope,$element,$attrs){
      $scope.c = 30;
      $scope.changeValueB = function () {
      $scope.b = 70;
    };
     $scope.changeValueA = function () {
      $scope.a = 90;
    };
    }
  }
});

