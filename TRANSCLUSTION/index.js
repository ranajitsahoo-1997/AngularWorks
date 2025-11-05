var app = angular.module("app", []);

app.controller("sample", ["$scope", function ($scope) {}]);

//* ng-transclude
app.directive("message", function () {
  return {
    templateUrl: "info-msg.html",
    transclude: true,
  };
});

//* using link function
app.directive("message2", function () {
  return {
    templateUrl: "info-msg2.html",
    transclude: true,
    link: function (scope, iElement, iAttrs, controller, transclude) {
      var content = transclude();
      var innerPanel = angular.element(
        iElement[0].querySelector("#innerPanel")
      );
      innerPanel.append(content);
    },
  };
});

//* using directive controller
app.directive("message3", function () {
  return {
    templateUrl: "info-msg2.html",
    transclude: true,
    controller: function ($scope, $element, $attrs, $transclude) {
      var content = $transclude();
      var innerPanel = angular.element(
        $element[0].querySelector("#innerPanel")
      );
      innerPanel.append(content);
    },
  };
});

//* using my own transclude directive
app.directive("message4", function () {
  return {
    templateUrl: "info-msg3.html",
    transclude: true,
  };
});

//* my own ng-transclude directive - "my-transclude"
app.directive("myTransclude", function () {
  return {
    link: function (scope, iElement, iAttrs, controller, transclude) {
      iElement.append(transclude());
    },
  };
});
