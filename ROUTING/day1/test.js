var app = angular.module("app", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        template: "<strong>Click one of the link from the side bar</strong>",
      })
      .when("/first-msg", {
        templateUrl: "msg1.html",
        controller: "message1",
        caseInsensitiveMatch: true
      })
      .when("/second-msg", {
        templateUrl: "msg2.html",
        controller: "message2",
      })
      .when("/third-msg", {
        templateUrl: "msg3.html",
        controller: "message3",
      })
      .when("/forth-msg", {
        redirectTo: "/second-msg"
      })
      .when("/fifth-msg", {
        redirectTo: function(){
            alert("Sorry! not implement yet...will take you to the first message now.")
            return '/first-msg'
        }
      })
      .otherwise({
        templateUrl: "nocontent.html"
      })
  },
]);

app.controller("message1", [
  "$scope",
  function ($scope) {
    $scope.a = 10;
    $scope.b = 20;
  },
]);

app.controller("message2", [
  "$scope",
  function ($scope) {
    $scope.a = 30;
    $scope.b = 40;
  },
]);
app.controller("message3", [
  "$scope",
  function ($scope) {
    $scope.a = 50;
    $scope.b = 600;
  },
]);
