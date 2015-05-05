

function LogoutCtrl(UsuarioService, $scope, $cookieStore, $location) {
	var self = this;
    //$scope.cookieValue = $cookies.text;
    
	if (UsuarioService.logout()) {
	    $location.path("/login");
	}
}

/**
 * Pass all functions into module
 */
angular
    .module('nutGoApp')
    .controller('LogoutCtrl', LogoutCtrl)
