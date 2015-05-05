(function(){
    'use strict';


function CookieCtrl($cookieStore) {
	var self = this;
    //$scope.cookieValue = $cookies.text;
}

/**
 *
 * Pass all functions into module
 */
angular
    .module('nutGoApp')
    .controller('CookieCtrl', CookieCtrl)
})();