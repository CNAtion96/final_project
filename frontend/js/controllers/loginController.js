(function() {
    'use strict';

    angular
        .module('wattpad')
        .controller('loginController', function($routeParams) {
            const vm = this;
            alert("TEST");

            console.log($routeParams.code);
        })
        
})();