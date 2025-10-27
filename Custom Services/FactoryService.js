var app = angular.module("app",[])
app.controller("call",["$scope","calcFactory","$log", function($scope,calcFactory,$log){
    $scope.a = 0;
    $scope.b = 0;
    $scope.doSum = function(){
        $log.debug($scope.a);
        $log.debug($scope.b)
        // * Synchronous calling
        $scope.sum = calcFactory.getSum($scope.a,$scope.b)

        // * ASynchronous calling (Preffered way)
        calcFactory.takeSum($scope.a,$scope.b,function(r){
            $scope.asyncSum = r;
        })

        //* RestAPI Calling
        calcFactory.restSum($scope.a,$scope.b,function(r){
            $scope.restSum = r;
        })
    }
    
}])

app.factory('calcFactory',["$http","$log",function($http,$log){
    $log.log("instantiate calcFactory...")
    var oCalcService = {}

    // * Synchronous calling
    oCalcService.getSum = function(a,b){
        $log.debug(a);
        $log.debug(b);
        var c = parseInt(a)+parseInt(b);
        return c;
    };

    // * ASynchronous calling (Preffered way)
    oCalcService.takeSum = function(a,b,callbackFunction){
        var c = parseInt(a)+parseInt(b);
        callbackFunction(c)
    }

    //* RestAPI Calling
    oCalcService.restSum = function(a,b,cb){
        $http({
            url: 'http://localhost:3001/Sum?a='+a+'&b='+b,
            method: 'GET'
        }).then(
            function(resp){
                $log.debug(resp.data)
                cb(resp.data)
            },
            function(resp){
                $log.error(resp)
            }

        )
    }

    return oCalcService;
}])