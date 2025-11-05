var app = angular.module('app',[])
app.controller('sample',['$scope',function($scope){
    $scope.a = {
        x: 10
    }
}])

// * shared Scope
app.directive('message1',function(){
    return{
        templateUrl: 'msg1.html',
        transclude: true,
        controller: function($scope,$element,$attrs){
            $scope.b = {
                y: 20
            }
        }
    }
})

// * Inherited Scope
app.directive('message2',function(){
    return{
        templateUrl: 'msg1.html',
        transclude: true,
        scope: true,
        controller: function($scope,$element,$attrs){
            $scope.b = {
                y: 20
            }
        }
    }
})

// * isolated Scope
app.directive('message3',function(){
    return{
        templateUrl: 'msg2.html',
        transclude: true,
        scope: {},
        controller: function($scope,$element,$attrs){
            $scope.b = {
                y: 20
            }
        }
    }
})
//* Manual  transclusion Scope custom data
app.directive('message4',function(){
    return{
        templateUrl: 'msg3.html',
        transclude: true,
        scope: {},
        controller: function($scope,$element,$attrs,$transclude){
            $scope.b = {
                y: 20
            }

            $transclude(function(transcludedElement,$transScope){
                $transScope.b={}
                $transScope.b.y=$scope.b.y
                angular
                    .element($element[0].querySelector("#innerPannel"))
                    .append(transcludedElement)
            })

        }
    }
})

//* Custom  transclusion Scope 
app.directive('message5',function(){
    return{
        templateUrl: 'msg3.html',
        transclude: true,
        scope: {},
        controller: function($scope,$element,$attrs,$transclude){
            $scope.b = {
                y: 20
            }
            // * creating new isolated scope
            var customScope = $scope.$new(true);
            customScope.a = {
                x: 100
            };
            customScope.b = {
                y: 200
            }
            $transclude(customScope,function(transEle){
                transEle.a = customScope.a
                transEle.b = customScope.b
                angular
                    .element($element[0].querySelector("#innerPannel"))
                    .append(transEle)
            })


        }
    }
})