var app = angular.module("empModule", []);
app.controller("digest", ["$scope","$rootScope",function ($scope, $rootScope) {
    $scope.a = 10;
    $scope.b = 23;
    $scope.c = 34;

    $scope.$watch("a", function(newValue,oldValue){
      if (newValue!=oldValue) {
        console.log("value a is modified",newValue);
        
      }
    })

    $scope.$watch("b", function(newValue,oldValue){
      if (newValue!=oldValue) {
        console.log("value a is modified",newValue);
        
      }
    })

    $scope.$watch("c", function(newValue,oldValue){
      if (newValue!=oldValue) {
        console.log("value a is modified",newValue);
        if ($scope.c>95) {
          $scope.a = 2002234
        }
        
      }
    })

    $rootScope.$watch(function(){
      console.log('--digest iteration started');
      
    })
  

  
}]);

