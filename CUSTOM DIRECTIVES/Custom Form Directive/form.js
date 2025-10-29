var app = angular.module("app",[])

app.controller("emp",["$scope","empService",function($scope,empService){

    //* Search Employee By ID
    $scope.doSearch = function(){
        empService.findEmployeeVyId($scope.searchEmpId,function(result){
            $scope.eId = result.id
            $scope.eName = result.name
            $scope.dName=result.dept,
            $scope.doj=result.DOJ,
            $scope.sal = result.sal,
            $scope.isHr=result.dept==='HR'
        })
    }
    empService.fetchAllEmployees(function(result){
        $scope.employees = result
    })
    
}])

app.service("empService",["$http","$log", function($http,$log){
    this.findEmployeeVyId = function(empID,callbackFunction){
        $http({
            url: "http://localhost:3001/employees/"+empID,
            method: 'GET'
        }).then(
            function(resp){
                $log.debug(resp.data)
                callbackFunction(resp.data)
            },
            function(resp){
                $log.error("Error Occured:"+ resp)
            }
        )
    }
    this.fetchAllEmployees= function(cb){
        $http({
            url: "http://localhost:3001/employees/",
            method: 'GET'
        }).then(
            function(resp){
                $log.debug(resp.data)
                cb(resp.data)
            },
            function(resp){
                $log.error("Error Occured:"+ resp)
            }
        )
    }
}])

app.directive("empDetails",function(){
    return {
        templateUrl: "empDatil.html"
    };
})

app.directive("listEmployees",function(){
    return {
        templateUrl: "listEmployees.html"
    };
})

