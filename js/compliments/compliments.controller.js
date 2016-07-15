

"use strict";

(function(){
    angular
    .module("angularComp")
    .controller("mainController", [
        ComplimentsControllerFunction
    ])

    function ComplimentsControllerFunction () {
        var vm = this;
        vm.random = data[Math.floor(Math.random()*data.length)];


    }



})();
