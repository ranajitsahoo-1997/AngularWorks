var app = angular.module("app",[])

app.controller('msg',["$scope",function($scope){

}]);

app.directive('message', function(interpolate){
    return {
        compile: function(tElement,tAttributes){
            console.log(tAttributes.text+" :- in Compile");
            return {
                pre: function(scope,iElement,iAtrributes){
                    console.log(iAtrributes.text + "-In Pre");
                    
                },
                post: function(scope,iElement,iAtrributes){
                    console.log(iAtrributes.text + "-In Post");
                    
                }
            }
        },
        controller: function($scope,$element,$attrs){
            console.log($attrs.text+ ": in controller");
            
        }
    }
})