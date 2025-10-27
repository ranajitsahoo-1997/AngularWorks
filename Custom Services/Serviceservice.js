var app = angular.module("app",[])
app.controller("call",["$scope","calcService","$log", function($scope,calcService,$log){
    $scope.a = 0;
    $scope.b = 0;
    $scope.doSum = function(){
        $log.debug($scope.a);
        $log.debug($scope.b)
        // * Synchronous calling
        $scope.sum = calcService.getSum($scope.a,$scope.b)

        // * ASynchronous calling (Preffered way)
        calcService.takeSum($scope.a,$scope.b,function(r){
            $scope.asyncSum = r;
        })

        // //* RestAPI Calling
        calcService.restSum($scope.a,$scope.b,function(r){
            $scope.restSum = r;
        })
    }
    
}])

app.service('calcService',["$http","$log",function($http,$log){
    $log.log("instantiate calcService...")
    

    // * Synchronous calling
    this.getSum = function(a,b){
        $log.debug(a);
        $log.debug(b);
        var c = parseInt(a)+parseInt(b);
        return c;
    };

    // * ASynchronous calling (Preffered way)
    this.takeSum = function(a,b,callbackFunction){
        var c = parseInt(a)+parseInt(b);
        callbackFunction(c)
    }

    //* RestAPI Calling
    this.restSum = function(a,b,cb){
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

    // return oCalcService;
}])