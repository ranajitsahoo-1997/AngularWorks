var app = angular.module("app",[])
app.controller("call",["$scope","$http","$log", function($scope,$http,$log){
    $scope.a=10;
    $scope.b = 20;
    $scope.sum = $scope.a+$scope.b
    $scope.doSum = function(){
        // $scope.sum = parseInt($scope.a)+parseInt($scope.b);
        $http(
            {
                url: "http://localhost:3001/sum?a="+$scope.a+"&b="+$scope.b,
                method: "GET"
            }
        ).then(
            function(resp){
                // success
                $log.debug(resp.data)
                $scope.sum = resp.data
            },
            function(resp){
                //error
                $log.error(resp)
            }

        );
    }
    $scope.reset = function(){
        $scope.a = 0
        $scope.b = 0
    }
}])