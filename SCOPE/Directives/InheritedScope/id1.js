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
    templateUrl: "id1info-msg.html",
   
  }
});

