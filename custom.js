var myApp = angular.module("angularJSApp",[]);


myApp.controller("myctrl",function($scope){
    $scope.name = "Pallab";

    $scope.color = "#333333";
    $scope.reverseName = function(){
     $scope.name = $scope.name.split("").reverse().join("");
    };
    $scope.randomColor = function(){
        $scope.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    };

});

myApp.directive("myDirective",function(){

    return {
        restrict : "EA",
        scope : false, //Directive uses its parent scope
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name' />"
    }

});

myApp.directive("newDirective",function(){

    return {
        restrict : "EA",
        scope : true, //at first, Directive uses its parent scope. next Directive gets a new scope
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name' />"
    }

});

myApp.directive("scopeDirective",function(){

    return {
        restrict : "EA",
        scope : {}, //Directive gets a new isolated scope
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name' />"
    }

});


myApp.directive("idirective",function(){

    return {
        restrict : "EA",
         scope: {
            name: "@",  // (  Text binding / one-way binding )
            color: "=", // ( Direct model binding / two-way binding )
            reverse1: "&" // ( Behaviour binding / Method binding  )
        },
        template:[
            "<div class='line'>",
            "Name : <strong>{{name}}</strong>;  Change name:<input type='text' ng-model='name' /><br/>",
            "</div><div class='line'>",
            "Color : <strong style='color:{{color}}'>{{color|uppercase}}</strong>;  Change color:<input type='text' ng-model='color' /><br/></div>",
            "<br/><input type='button' ng-click='reverse1()' value='Reverse Name'/>"
        ].join("") 
    }

});


myApp.directive("clientDirective",function(){

    return {
        restrict : "E",
        scope:true,
        link : function($scope){
            $scope.$parent.$broadcast("message","Hi! I am client");
        }
    }
});

myApp.directive("serverDirective",function(){

    return {
        restrict : "E",
         scope:true,
        link : function($scope){
            $scope.$on("message",function(e,msg){
                console.log(msg);
                $scope.msg = msg;
            }
            );
        }
    }
});