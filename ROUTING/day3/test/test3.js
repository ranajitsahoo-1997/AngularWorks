var app = angular.module("app", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/calc", {
        templateUrl: "calc.html",
        controller: "calcController",
      })
      .when("/calc/add/:a/:b", {
        templateUrl: "calcResult.html",
        controller: "calcAddController",
      })
      .when("/calc/mul/:a/:b", {
        templateUrl: "calcResult.html",
        controller: "calcMulController",
        resolve: {
          webServiceResult: [
            "dataService",
            "$route",
            "$q",
            function (dataService, $route, $q) {
              var a = $route.current.params.a;
              var b = $route.current.params.b;
              return dataService.mul(a, b).then(function (result) {
                if (result.data.result > 200) {
                  return $q.reject("cannot have result more than 200 ");
                } else {
                  return result;
                }
              });
            },
          ],
          // we can have multiple call like above for differnt api
        },
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
  function ($scope, dataService, $location) {
    $scope.a = 0;
    $scope.b = 0;

    $scope.doAdd = function () {
      var path = "/calc/add/" + $scope.a + "/" + $scope.b;
      $location.url(path);
    };
    $scope.doMul = function () {
      var path = "/calc/mul/" + $scope.a + "/" + $scope.b;
      $location.url(path);
    };
  },
]);

app.controller("calcAddController", [
  "$scope",
  "dataService",
  "$routeParams",
  function ($scope, dataService, $routeParams) {
    $scope.isLoading = true;
    dataService.add($routeParams.a, $routeParams.b).then(function (result) {
      $scope.result = result.data.result;
      $scope.isLoading = false;
    });
  },
]);

app.controller("calcMulController", [
  "$scope",
  "webServiceResult",
  function ($scope, webServiceResult) {
    $scope.result = webServiceResult.data.result;
  },
]);

app.run([
  "$rootScope",
  "$window",
  function ($rootScope, $window) {
    $rootScope.$on("$routeChangeStart", function (event, curr, prev) {
      console.log(curr);

      console.log("in route change start");
      $rootScope.isLoading = true;
    });
    $rootScope.$on("$routeChangeSuccess", function (event, cuur, prev) {
      console.log("in route change Success");
      $rootScope.isLoading = false;
    });
    $rootScope.$on(
      "$routeChangeError",
      function (event, cuur, prev, rejection) {
        console.log("in route change Error-msg:" + rejection);

        $rootScope.isLoading = false;
        if (cuur.$$route.originalPath == "/calc/mul/:a/:b") {
          $rootScope.error = rejection;
          $window.history.back();
        }
      }
    );
    $rootScope.$on(
      "$locationChangeStart",
      function (event, currUrl, prevUrl, currState, prevState) {
        console.log(currUrl);
        console.log(
          "in location change start" + currState + ", prev: " + prevState
        );
      }
    );
    $rootScope.$on(
      "$locationChangeSuccess",
      function (event, currUrl, prevUrl, currState, prevState) {
        console.log("in location change Success");
      }
    );
  },
]);
