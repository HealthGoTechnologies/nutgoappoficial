(function(){
    'use strict';

function LoginGoogleCtrl($scope) {
	var self = this;
    /*
         
    var self = this;
    self.ola = "Olá!";

    self.submit = function () {

        var usuario = {
            email: self.email,
            senha: self.senha
        };

        console.log('User clicked submit with', usuario);
    };

    */
    self.enviar = function(){
        console.log('login via Google');
    }
}


/**
 *
 * Pass all functions into module
 */
angular
    .module('nutGoApp')
    .controller('LoginGoogleCtrl', LoginGoogleCtrl)

})();