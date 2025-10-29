var app = angular.module("app", []);

app.controller("msg", ["$scope", function ($scope) {}]);

//& When we required all thing like compile,pre,post and controller
app.directive("message", function ($interpolate) {
  return {
    // * in Complile tElement has direct access to the the template not to the instance of it
    compile: function (tElement, tAttributes) {
      console.log(tAttributes.text + " :- in Compile");
      tElement.css("border", "1px solid grey");
      tElement.css("margin", "10px");

      return {
        pre: function (scope, iElement, iAtrributes) {
          console.log(iAtrributes.text + "-In Pre");
        },
        post: function (scope, iElement, iAtrributes) {
          //* Post-Link is the best place where we need to change the DOM of the template
          console.log(iAtrributes.text + "-In Post");
          if (parseInt(iAtrributes.text) % 2 === 0) {
            iElement.css("border", "1px solid blue");
          } else {
            iElement.css("cursor", "pointer");
            iElement.on("click", scope.btnClick);
          }
        },
      };
    },
    controller: function ($scope, $element, $attrs) {
      // * though controller has the $scope but it can not use the data directly
      // * we have to use $interpolate to extract the data from the $scope

      var v = $interpolate($attrs.text)($scope);
      // console.log($attrs.text+ ": in controller");
      console.log(v + ": in controller");

      // * if we have any functional stuff its better to manipulate in controller
      $scope.btnClick = function () {
        alert(v);
      };
    },
  };
});

//& When we required olny compile,post and controller
app.directive("message3", function ($interpolate) {
  return {
    compile: function (tElement, tAttributes) {
      console.log(tAttributes.text + " :- in Compile");
      tElement.css("border", "1px solid grey");
      tElement.css("margin", "10px");

      //! Post-link function only to be executed
      return function (scope, iElement, iAtrributes) {
        //* Post-Link is the best place where we need to change the DOM of the template
        console.log(iAtrributes.text + "-In Post");
        if (parseInt(iAtrributes.text) % 2 === 0) {
          iElement.css("border", "1px solid blue");
        } else {
          iElement.css("cursor", "pointer");
          iElement.on("click", scope.btnClick);
        }
      };
    },
    controller: function ($scope, $element, $attrs) {
      // * though controller has the $scope but it can not use the data directly
      // * we have to use $interpolate to extract the data from the $scope

      var v = $interpolate($attrs.text)($scope);
      // console.log($attrs.text+ ": in controller");
      console.log(v + ": in controller");

      // * if we have any functional stuff its better to manipulate in controller
      $scope.btnClick = function () {
        alert(v);
      };
    },
  };
});

//& When we required olny pre,post and controller
app.directive("message2", function ($interpolate) {
  return {
    link: {
      pre: function (scope, iElement, iAtrributes) {
        console.log(iAtrributes.text + "-In Pre");
      },
      post: function (scope, iElement, iAtrributes) {
        //* Post-Link is the best place where we need to change the DOM of the template
        console.log(iAtrributes.text + "-In Post");
        if (parseInt(iAtrributes.text) % 2 === 0) {
          iElement.css("border", "1px solid blue");
        } else {
          iElement.css("cursor", "pointer");
          iElement.on("click", scope.btnClick);
        }
      },
    },
    controller: function ($scope, $element, $attrs) {
      // * though controller has the $scope but it can not use the data directly
      // * we have to use $interpolate to extract the data from the $scope

      var v = $interpolate($attrs.text)($scope);
      // console.log($attrs.text+ ": in controller");
      console.log(v + ": in controller");

      // * if we have any functional stuff its better to manipulate in controller
      $scope.btnClick = function () {
        alert(v);
      };
    },
  };
});

//& When we required olny post
app.directive("message4", function ($interpolate) {
  //! Post-link function only to be executed
  return function (scope, iElement, iAtrributes) {
    //* Post-Link is the best place where we need to change the DOM of the template
    console.log(iAtrributes.text + "-In Post");
    if (parseInt(iAtrributes.text) % 2 === 0) {
      iElement.css("border", "1px solid blue");
    } 
  };
});
