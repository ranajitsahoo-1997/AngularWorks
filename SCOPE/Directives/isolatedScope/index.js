var app = angular.module("app", []);

app.controller("sample", [
  "$scope",
  function ($scope) {
    $scope.a = 10;
    $scope.b = 20;

    $scope.c = 30;
    $scope.d = 40;

    $scope.emp = {
      empno: 1001,
      ename: 'Raja'
    }
     $scope.emp2 = {
      empno: 1002,
      ename: 'Ranajit'
    }

    $scope.doSum = function(x,y){
      var r = parseInt(x)+parseInt(y)
      alert("Sum = "+r)
    }
  },
]);

// * @ scope paramter one way from parent to directive scope using @
app.directive('message',function(){
  return{
    templateUrl: "info-msg.html",
    scope: {
      x: '@',
      y: '@'
    },
    controller: function($scope,$element,$attrs){
      $scope.doProcess = function(){
        alert("Sum ="+ (parseInt($scope.x)+parseInt($scope.y)))
      }
    }
  }
})

app.directive('message2',function(){
  return{
    templateUrl: "info-msg.html",
    scope: {
      x: '@m',
      y: '@n'
    },
    controller: function($scope,$element,$attrs){
      $scope.doProcess = function(){
        alert("Sum ="+ (parseInt($scope.x)+parseInt($scope.y)))
      }
    }
  }
})

app.directive('message3',function(){
  return{
    templateUrl: "empTemplate.html",
    scope: {
      employee: '='
    },
   
  }
})
app.directive('message4',function(){
  return{
    templateUrl: "empTemplate.html",
    scope: {
      employee: '=oEmp'
    },
   
  }
})

app.directive('message5',function(){
  return{
    templateUrl: "andpercent.html",
    scope: {
      extSum: '&'
    },
   
  }
})
app.directive('message6',function(){
  return{
    templateUrl: "andpercent2.html",
    scope: {
      extSum: '&'
    }
   
  }
})

app.directive('message7',function(){
  return{
    templateUrl: "andpercent2.html",
    scope: {
      extSum: '&'
    },
    controller: function($scope,$element,$attrs){
      $scope.doProcess = function(){
        $scope.extSum({m: $scope.p,n: $scope.q})
      }
      
    }
   
  }
})
app.directive('message8',function(){
  return{
    templateUrl: "andpercent3.html",
    scope: {
      extSum: '&justSum'
    },
    controller: function($scope,$element,$attrs){
      $scope.doProcess = function(){
        $scope.extSum({m: $scope.p,n: ($scope.q*$scope.$parent.a)})
      }
      
    }
   
  }
})
