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

app.directive("message", function () {
  return {
    templateUrl: "info-msg.html",

    controller: function ($scope, $element, $attrs){
      $scope.changeValueB = function () {
        $scope.b = 40;
      };
    }
  };
});

app.directive("message2", function () {
  return {
    templateUrl: "info-msg.html",

    controller: function ($scope, $element, $attrs){
      $scope.changeValueB = function () {
        $scope.b = 60;
      };
    }
  };
});
