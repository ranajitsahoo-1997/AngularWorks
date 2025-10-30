var app = angular.module("empModule", []);
app.controller("watch", [
  "$scope",
  "$log",
  function ($scope, $log) {
    $scope.a = 10;
    $scope.b = 23;
    $scope.c = 34;

    $scope.updateC = function () {
      $scope.c = $scope.a * 2;
    };
    $scope.$watch("a", function (newValue, oldValue) {
      $scope.b = $scope.a * 2;
    });
    $scope.$watch("b", function (newValue, oldValue) {
      $scope.c = $scope.b * 2;
    });
    $scope.$watch("c", function (newValue, oldValue) {
      $log.debug(
        "The value of C was " + oldValue + ". New Value of C is " + newValue
      );
    });
  },
]);

app.controller("watchgroup", [
  "$scope",
  "$log",
  function ($scope, $log) {
    $scope.a = 10;
    $scope.b = 23;
    $scope.c = 0;
    $scope.$watchGroup(["a", "b"], function (newValue, oldValue) {
      if (newValue != oldValue) {
        $scope.c = parseInt($scope.a) + parseInt($scope.b);
      }
    });
  },
]);

app.controller("watch-refernce", [
  "$scope",
  "$log",
  function ($scope, $log) {
    $scope.o = {
      a: 1,
      b: 2,
      c: 3,
    };
    $scope.$watch("o", function (newValue, oldValue) {
      if (newValue != oldValue) {
        $scope.o.c = parseInt($scope.o.a) * parseInt($scope.o.b);
      }
    });
  },
]);

app.controller("watch-refernce-equality", [
  "$scope",
  "$log",
  function ($scope, $log) {
    $scope.o = {
      a: 1,
      b: 2,
      c: 3,
    };
    $scope.$watch(
      "o",
      function (newValue, oldValue) {
        if (newValue != oldValue) {
          $scope.o.c = parseInt($scope.o.a) * parseInt($scope.o.b);
        }
      },
      true
    );
  },
]);

app.controller("watch-group-with-object", [
  "$scope",
  "$log",
  function ($scope, $log) {
    $scope.o = {
      a: 1,
      b: 2,
      c: 3,
    };
    $scope.$watchGroup(["o.a", "o.b"], function (newValue, oldValue) {
      if (newValue != oldValue) {
        $scope.o.c = parseInt($scope.o.a) * parseInt($scope.o.b);
      }
    });
  },
]);

app.controller("emp", ["$scope",function ($scope) {
    $scope.emps = [
      { eId: 1001, eName: "Ranajit" },
      { eId: 1002, eName: "Pradeep Sir" },
      { eId: 1003, eName: "Shashi Sir" },
    ];
    $scope.add = function(){
      const e = {
         eId: $scope.id,
         eName: $scope.name

      }
      $scope.emps.push(e)
    }
    $scope.update = function(){
      const id = $scope.uid;
      const name = $scope.uname;
      var flag= false;
      for (let i = 0; i < $scope.emps.length; i++) {
         const e = $scope.emps[i];
         if(e.eId==id){
            flag=true;
            e.eName = name
         }else{
            continue;
         }
         
      }
      if(!flag){
      $scope.msg = "No Employee with this ID "+id+" Found"
    }
    }
    
    $scope.$watchCollection("emps",function(newValue,oldValue){
      if (oldValue!=newValue) {
         $scope.msg = "New Employee pushed"
         
      }
    })


  },
]);

app.controller("emp", ["$scope","$log",function ($scope,$log) {
    $scope.emps = [
      { eId: 1001, eName: "Ranajit" },
      { eId: 1002, eName: "Pradeep Sir" },
      { eId: 1003, eName: "Shashi Sir" },
    ];
    $scope.add = function(){
      const e = {
         eId: $scope.id,
         eName: $scope.name

      }
      $scope.emps.push(e)
    }
    $scope.update = function(){
      const id = $scope.uid;
      const name = $scope.uname;
      for (let i = 0; i < $scope.emps.length; i++) {
         const e = $scope.emps[i];
         if(e.eId==id){
            e.eName = name
         }else{
            continue;
         }
         
      }
      
    }
    
    $scope.$watch("emps",function(newValue,oldValue){
      if (oldValue.length!=newValue.length) {
         
         $scope.msg = "New Employee pushed/pulled"
   
         
      }
      else{
         $scope.msg = "Data manipulation happend"
      }
    },true)


  },
]);
