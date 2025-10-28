// var app = angular.module("app", []);

// app.controller("emp", ["$scope", "empService", function($scope, empService) {

//     // search employee by id
//     $scope.doSearch = function() {
//         empService.findEmployeeByID($scope.searchEmpId, function(result) {
//             $scope.empId = result.id;
//             $scope.name = result.name;
//         });
//     };

// }]);

// app.service("empService", ["$http", "$log", function($http, $log) {
//     this.findEmployeeByID = function(empId, cb) {
//         $http({
//             url: "http://localhost:3001/employees/" + empId,
//             method: "GET"
//         }).then(
//             function(resp) {
//                 $log.debug(resp.data);
//                 cb(resp.data);
//             },
//             function(resp) {
//                 $log.error("Error occurred");
//                 alert("Employee not found!");
//             }
//         );
//     };
// }]);





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
}])






















