var app = angular.module("app", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/calc/:option?/:a?/:b?", {
        templateUrl: "calc.html",
        controller: "calcController",
      })
      .when("/", {
        template: "<strong>Click one of the link from the side bar</strong>",
      })

      .otherwise({
        templateUrl: "nocontent.html",
      });
  },
]);

app.controller("calcController", [
  "$scope",
  "dataService",
  "$location",
  "$routeParams",
  "$route",
  function ($scope, dataService, $location, $routeParams, $route) {
    console.log("in Controller");

    $scope.a = 0;
    $scope.b = 0;

    if ($routeParams.a) {
      $scope.a = $routeParams.a;
    }
    if ($routeParams.b) {
      $scope.b = $routeParams.b;
    }

    if ($routeParams.option && $routeParams.a && $routeParams.b) {
      if ($routeParams.option == "add") {
        $scope.isLoading = true
        dataService.add($scope.a, $scope.b).then(function (result) {
          console.log(result.data.result);

          $scope.result = result.data.result;
          $scope.isLoading = false
        });

      } else if ($routeParams.option == "mul") {
        $scope.isLoading = true

        dataService.mul($scope.a, $scope.b).then(function (result) {
          console.log(result.data.result);

          $scope.result = result.data.result;
          $scope.isLoading = false

        });
      } else if ($routeParams.option == "sub") {
        $scope.isLoading = true

        dataService.sub($scope.a, $scope.b).then(function (result) {
          console.log(result.data.result);

          $scope.result = result.data.result;
          $scope.isLoading = false

        });
      } else {
        $location.url("/calc");
      }
    }

    $scope.doAdd = function () {
      console.log($route);

      var path = "/calc/add/" + $scope.a + "/" + $scope.b;

      if ($location.path() == path) {
        $route.reload();
      } else {
        $location.url(path);
      }
    };
    $scope.doMul = function () {
      var path = "/calc/mul/" + $scope.a + "/" + $scope.b;
      if ($location.path() == path) {
        $route.reload();
      } else {
        $location.url(path);
      }
    };
    $scope.doSub = function () {
      var path = "/calc/sub/" + $scope.a + "/" + $scope.b;
      if ($location.path() == path) {
        $route.reload();
      } else {
        $location.url(path);
      }
    };

    $scope.doUpdateResults = function () {
      $route.updateParams({
        a: $scope.a,
        b: $scope.b,
      });
    };
  },
]);

app.run([
  "$rootScope",
  function ($rootScope) {
    $rootScope.$on("$routeChangeStart", function (event, curr, prev) {
      console.log(curr);

      console.log("in route change start");
    });
    $rootScope.$on("$routeChangeSuccess", function (event, cuur, prev) {
      console.log("in route change Success");
    });
    $rootScope.$on("$locationChangeStart", function (event, currUrl, prevUrl,currState,prevState) {
      console.log(currUrl);
      console.log("in location change start"+currState+", prev: "+prevState);
      
      
    });
    $rootScope.$on("$locationChangeSuccess", function (event, currUrl, prevUrl,currState,prevState) {
      console.log("in location change Success");
    });
  },
]);
