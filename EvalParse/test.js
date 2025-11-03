var app = angular.module('app',[])
app.controller('sample',["$scope","$parse","$interpolate",function($scope,$parse,$interpolate){
    $scope.a = 10;
    $scope.b = 20;
    $scope.demo = function(){
        alert("result is"+($scope.a*$scope.b))
    }
    $scope.demoEval = function(){
        // var r = $scope.$eval("a*b")
        // var r = $scope.$eval("a*b*3*c",{c: 10})
        // var r = $scope.$eval("a*b*3*c",{c: 10,a:20})
        // var r = $scope.$eval(function(scope,locals){
        //     return scope.a*scope.b;
        // })
         var r = $scope.$eval(function(scope,locals){
            scope.a = locals.a
            return scope.a*scope.b*locals.c;
        },{
            a: 10000,
            c: 5
        })


        alert("result is"+ r)
    }
    $scope.demoParse = function(){
        // var f = $parse("a*b") //* returns a function
        // var r = f($scope)
        
        // alert("result is"+ r)

        // alert("Result = "+ $parse("a*b")($scope));
        // alert("Result = "+ $parse("a*b")({
        //     a:10,
        //     b:23
        // }));
        alert("Result = "+ $parse("a").assign($scope,"29")); // * digest process is triggered

    }

    $scope.demoInterpolate = function(){
        // var f = $interpolate("{{a*b}}") //* returns a function
        // var r = f($scope)
        // alert("Result = "+r)

        // var f = $interpolate("{{a*b}} and some othe result {{a*b*34}}") //* returns a function
        // var r = f($scope)
        // alert("Result = "+r)
        var f = $interpolate("{{a*b|currency}} and some othe result {{a*b*34}}") //* returns a function
        var r = f($scope)
        alert("Result = "+r)
    }
}])