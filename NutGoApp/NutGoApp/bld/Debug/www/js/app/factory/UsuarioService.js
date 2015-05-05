(function(){
		'use strict';

angular.module('nutGoApp')
  .factory('UsuarioService', ['$localStorage','$cookieStore', '$http', function ($localStorage, $cookieStore, $http) {
      console.log("UsuarioService");

      var urlNutGoWeb = "http://nutgoweb.azurewebsites.net/api/usuario";
      var urlNutGoWebToken = "http://nutgoweb.azurewebsites.net/token";
      var currentUser = getUserFromToken();
      
      function alterarUsuario(user) {
          angular.extend(currentUser, user);
      }
    
      function getUserFromToken() {
          var token = $localStorage.token;
          var user = {};
          if (typeof token !== 'undefined') {
            
              user = $localStorage.token;
                      $localStorage.tokenType;
                      $localStorage.expires;
                      $localStorage.nomeCompleto;
                      $localStorage.id;
                      $localStorage.usuario;
          }
          return user;
      }

      var service = {

          isLoggedIn: false,

          session: function (user) {
            
              var email = user.email;
              $cookieStore.put("email", email);
          },

          cadastrarUsuario: function (usuario) {
                console.log(usuario);
                return $http.post(urlNutGoWeb, 
                                    usuario,  {
                                        headers: {
                                                  'Content-Type': 'application/json'
                                        }
                                    })
                             .success(function (data, status) {
                                 isLoggedIn: true

                             })
                              .error(function (data, status) {
                                  isLoggedIn: false

                              });
          },

          
          getAllUsuarios: function () {
              return $http.get(urlNutGoWeb)
                             .success(function (data, status) {
                                 isLoggedIn: true
                 
                             })
                              .error(function (data, status) {
                                  isLoggedIn: false
              
                              });
          },

          getUsuarioById: function (id) {
              return $http.get(urlNutGoWeb + '/' + id)
                             .success(function (data, status) {
                                 isLoggedIn: true

                             })
                              .error(function (data, status) {
                                  isLoggedIn: false

                              });
          },

          /**
          * Retorno: 
              Nome:'James Slo',
              Email:'yevanaguiar@hotmail.com',
              Senha:'123456',
              ConfirmaSenha:'123456'
          */
          getUsuarioCadastroSimples: function () {
              return $http.post(urlNutGoWeb)
                             .success(function (data, status) {
                                 isLoggedIn: true

                             })
                              .error(function (data, status) {
                                  isLoggedIn: false

                              });
          },

          confirmarEmail: function (id) {
              return $http.post(urlNutGoWeb + '/ConfirmarEmail')
                             .success(function (data, status) {
                                 isLoggedIn: true

                             })
                              .error(function (data, status) {
                                  isLoggedIn: false

                              });
          },

          redefinirSenha: function (usuario) {

              self.email = { Email: usuario.email };

              return $http.post(urlNutGoWeb + '/ResetarSenha',
                                email,
                              {
                              headers: {
                                  'Content-Type': 'application/json'
                                  }
                              })
                             .success(function (data, status) {
                                 //isLoggedIn: true


                             })
                              .error(function (data, status) {
                                  //isLoggedIn: false

                              });
          },

          updateUsuario: function (usuario) {
              return $http.put(urlNutGoWeb + '/' + usuario.id)
                             .success(function (data, status) {
                                 isLoggedIn: true

                             })
                              .error(function (data, status) {
                                  isLoggedIn: false

                              });
          },

          cadastrarUsuarioCompleto: function (usuario) {
              console.log(usuario);
              return $http.post(urlNutGoWeb,
                                  usuario, {
                                      headers: {
                                          'Content-Type': 'application/json'
                                      }
                                  })
                           .success(function (data, status) {
                               isLoggedIn: true

                           })
                            .error(function (data, status) {
                                isLoggedIn: false

                            });
          },

            
          
          login: function (user) {
                debugger;
              var data = "grant_type=password&username=" + user.username + "&password=" + user.password;
              return $http.post(urlNutGoWebToken, //+ '/autenticar',
                                data,
                                  {
                                  headers: {
                                      'Content-Type': 'application/x-www-form-urlenconded',
                                      'Accept': 'application/json'
                                  }
                              })
              .success(function (data, status) {

                  if (data.error == "invalid_grant") {
                  
                  } else if (data.error == "unsupported_grant_type") {

                  } else {
                      $localStorage.token = data.access_token;
                      $localStorage.tokenType = data.token_type;
                      $localStorage.expires = data.expires_in;
                      $localStorage.nomeCompleto = data.NomeCompleto;
                      $localStorage.id = data.Id;
                      $localStorage.usuario = data.Usuario;
                      isLoggedIn: true
                  }
                 
              })
              .error(function (data, status) {
                  isLoggedIn: false
              
              });

          },


          logout: function () {

              alterarUsuario({});
                delete $localStorage.token;
                delete $localStorage.tokenType;
                delete $localStorage.expires;
                delete $localStorage.nomeCompleto;
                delete $localStorage.id;
                delete $localStorage.usuario;
                isLoggedIn: false
              return true;
              console.log("Saindo da aplicação...");
             
          }

          /*
          ,verificarUsuário: function () {
                     //$http.get(urlNutGoWeb + "/autenticar")
              return $http.get(urlNutGoWeb + "/autenticar")
                            .success(function (success) { })
                            .error(function (error) { })
             
          }
          */
      };
      return service;
  }]);

  
})();
