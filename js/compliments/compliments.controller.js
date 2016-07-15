

"use strict";

(function(){
    angular
    .module("compliments")
    .controller("complimentsController", [
        ComplimentsControllerFunction
    ])

    function ComplimentsControllerFunction () {
        var vm = this;
        vm.random = data[Math.floor(Math.random()*data.length)];


    }



})();
