(function () {
    'use strict';

    function LoginCtrl(UsuarioService, deviceReady, getCurrentPosition, getWeather, $rootScope, $scope, $location, $localStorage, $cookies) {

        var self = this;
        
            $scope.msgWarning = { "visibility": "hidden", "display": "none" }
            $scope.warningMsgEmailJaExiste = { "visibility": "hidden", "display": "none" }
        
        self.login = function (done) {
            debugger;
            /*
            getCurrentPosition(function (position) {
                debugger;
                getWeather(
                  position.coords.latitude,
                  position.coords.longitude,
                  function (location, weather) {
                      debugger;
                      $scope.location = location;
                      $scope.weather = weather;
                  });
            });

            deviceReady(function () {
                debugger;
                navigator.geolocation.getCurrentPosition(function (position) {
                   console.log(position.coords.latitude);
                   console.log(position.coords.longitude);

                    $rootScope.$apply(function () {
                        done(position);
                    });
                });
            });
            */
            var formLogin = {
                username: $scope.email,
                password: $scope.senha,
                grant_type: "password"
            };

            UsuarioService.login(formLogin)
                    .success(function (data) {
                   
                if (data.error == "invalid_grant") {

                    $scope.msgWarning = { 'visibility': 'visible', 'display': '' };
                    $scope.msgErro = data.error_description;
                    
                   // $location.path('perfil/perfil_usuario');

                } else if (data.error == "unsupported_grant_type") {

                    $scope.msgWarning = { 'visibility': 'visible', 'display': '' };
                    $scope.msgErro = "Não foi possível logar.";

                    // $location.path('perfil/perfil_usuario');

                } else {
                   
                    $location.path('perfil/perfil_usuario');

                }
              
                    }, function (error) {
                        console.log("erro!!!!");
                        self.errorMessage = "Erro!";
                    })
            .error(function (data, status) {
                $rootScope.erro = true;
                console.log("error...");
                // console.error('Aconteceu um erro no login', status, data);
            })
        };


    }


    /**
     *
     * Pass all functions into module
     */
    angular
        .module('nutGoApp')
        .controller('LoginCtrl', LoginCtrl)

})();