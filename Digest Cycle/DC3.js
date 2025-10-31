var app = angular.module("app", []);

app.controller("msg", [
  "$scope",
  function ($scope) {
    $scope.data = [
      { v: 17, r: 0 },
      { v: 35, r: 0 },
      { v: 24, r: 0 },
      { v: 12, r: 0 },
      { v: 47, r: 0 },
    ];
    $scope.total = function () {
      var r = 0;
      for (let i = 0; i < $scope.data.length; i++) {
        const element = $scope.data[i].r;

        r += parseInt(element);
      }
      $scope.res = r;
    };
  },
]);

app.directive("message", function () {
  return {
    templateUrl: "info-msg.html",

    compile: function (tElement, tAtrributes) {
      return function (scope, iElement, iAttributes) {
        scope.btnSquare = function () {
          scope.o.r = scope.o.v * scope.o.v;
          if (scope.o.r > 900) {
          iElement.css("color", "red");
        }
        };
      };
    },

    controller: function ($scope, $element, $attrs) {
      $scope.btnClick = function () {
        $scope.o.r = $scope.o.v * 2;
        if ($scope.o.r > 30) {
          $element.css("color", "red");
        }
      };
    },
  };
});
