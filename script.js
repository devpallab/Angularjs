var myApp = angular.module("angularJSApp",[]);


myApp.controller("myctrl",function($scope){
    $scope.name = "Pallab";

});

myApp.directive("eDirective",function(){

    return {
        restrict : "E",
        //scope : false, //Directive uses its parent scope
        template : '<div> Element Directive {{name}}</div>',
        link : function(scope){
            alert(scope.name+" Element Restrict");
        }
    }

});


myApp.directive("aDirective",function(){

    return {
        restrict : "A",
        //scope : false, //Directive uses its parent scope
        template : '<div> Attribute Directive {{name}}</div>',
        link : function(scope){
            alert(scope.name+" Attribute Restrict");
        }
    }

});



myApp.directive("cDirective",function(){

    return {
        restrict : "C",
        //scope : false, //Directive uses its parent scope
        template : '<div> Class Directive {{name}}</div>',
        link : function(scope){
            alert(scope.name+" Class Restrict");
        }
    }

});


myApp.directive("mDirective",function(){

    return {
        restrict : "M",
        //scope : false, //Directive uses its parent scope
        //template : '<div> Comment Directive {{name}}</div>',
        link : function(scope){
            alert(scope.name+" Comment Restrict");
        }
    }

});

