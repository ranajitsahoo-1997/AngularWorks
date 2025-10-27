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

app.provider('calcService',function(){

    var baseUrl = '';
    this.config = function(url){
        baseUrl = url
    }

    this.$get = ["$log","$http",function($log,$http){
        $log.debug(baseUrl)
        var oCalcService = {}
        oCalcService.getSum = function(a,b){
            $log.debug(a)
            $log.debug("value of b = "+b)
            return parseInt(a)+parseInt(b);
        };
        oCalcService.takeSum = function(a,b,cb){
            var c = parseInt(a)+parseInt(b);
            cb(c);
        };

        oCalcService.restSum = function(a,b,cb){
             $http({
            url: baseUrl+'/Sum?a='+a+'&b='+b,
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
    }];


})


// ! The name of the provider config 
// ! should be followed with provider
app.config(['calcServiceProvider',function(calcServiceProvider){
    calcServiceProvider.config("http://localhost:3001")
}])

