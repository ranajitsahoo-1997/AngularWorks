var app = angular.module("empModule",[])
app.controller("emp",["$scope","empServices", function($scope,empServices){
    $scope.searchEmployee = function(){
        empServices.getEmpById($scope.searchId,function(result){
        $scope.empId=result.id,
        $scope.empName=result.name,
        $scope.deptName=result.dept,
        $scope.doj=result.DOJ
    });
    }
    $scope.allEmployee=function(){
        empServices.getAllEmployees(function(result){
        $scope.employees=result
    })
    }
    
}])

app.service("empServices",["$http","$log",function($http,$log){
    this.getEmpById = function(sEmpId,cb){
        $http({
            url: "http://localhost:3001/employees/"+sEmpId,
            method: 'GET'
        }).then(
            function(successResponse){
                cb(successResponse.data)
            },
            function(errorResponse){
                $log.error("Error: "+errorResponse)
            }
        )
    };

    this.getAllEmployees = function(cb){
        $http({
            url: "http://localhost:3001/employees",
            method: 'GET'
        }).then(
            function(successResponse){
                cb(successResponse.data)
            },
            function(errorResponse){
                $log.error("Error: "+errorResponse)
            }
        )
    }
}])