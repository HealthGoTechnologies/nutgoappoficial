(function(){
    'use strict';

function LoginFacebookCtrl($scope) {
	var self = this;
	
    self.enviar = function () {
        console.log('Login via Facebook');
    }
}

/**
 *
 * Pass all functions into module
 */
angular
    .module('nutGoApp')
    .controller('LoginFacebookCtrl', LoginFacebookCtrl)

})();