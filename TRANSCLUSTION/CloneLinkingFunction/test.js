var app = angular.module("app", []);

app.controller("sample", ["$scope", function ($scope) {}]);

app.directive("message1", function () {
  return {
    templateUrl: "msg1.html",
    transclude: true,
    controller: function ($scope, $element, $attrs, $transclude) {
      angular
        .element($element[0].querySelector("#innerPannel1"))
        .append($transclude());
      // * here if you will notice that we have already instantiated the $transclude() which is without callback function
      //& so it has already transcluded the ineer meassage of directive in
      // ? blue color for the div id #innerPannel1
      angular
        .element($element[0].querySelector("#innerPannel2"))
        .append($transclude());
      // * here again we are instantiating the transclude() so that it resues the above one which is already created and applies the for the div in
      // ! red color for the div id #innerPannel2 and removed transcluded content from #innerPannel1
      // * So, we can only see the #innerPannel2 div with red color insted of blue because we are using transclude() without callback function.
    },
  };
});

app.directive("message2", function () {
  return {
    templateUrl: "msg1.html",
    transclude: true,
    controller: function ($scope, $element, $attrs, $transclude) {
      $transclude(function (transcludedElement) {
        angular
          .element($element[0].querySelector("#innerPannel1"))
          .append(transcludedElement);
      });
      $transclude(function (transcludedElement) {
        angular
          .element($element[0].querySelector("#innerPannel2"))
          .append(transcludedElement);
      });
    },
  };
});
