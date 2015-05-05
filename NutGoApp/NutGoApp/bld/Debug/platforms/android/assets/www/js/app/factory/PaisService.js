(function(){
		'use strict';

angular.module('nutGoApp')
  .factory('PaisService', ['$cookieStore', '$http', function ($cookieStore, $http) {
      console.log("PaisService");

      var urlNutGoWeb = "http://nutgowebapi.azurewebsites.net/api/usuario";

      var service = {

          isLoggedIn: false,

          session: function (user) {
            
              var email = user.email;
              $cookieStore.put("email", email);
          },

          pesquisaGeral: function (palavras) {
                 console.log(palavras);
                return $http.get(urlNutGoWeb, 
                                    palavras,  {
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

          pesquisaNutricionistas: function () {
              return $http.get(urlNutGoWeb,
                                  palavras, {
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

          pesquisaClinicas: function () {
              return $http.get(urlNutGoWeb,
                                  palavras, {
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

          pesquisaPertoDeMim: function () {
              return $http.get(urlNutGoWeb,
                                  palavras, {
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
          
          logout: function () {

              return $http({
                  url: 'http://gvoigt.com.br/webservice/logout.php?callback=JSON_CALLBACK',
                  method: "JSONP",
                  headers: {
                      'Content-Type': 'application/json'
                  }
              })
              .success(function (data) {
                  isLoggedIn: false
                  if(data.logout == "true"){
                    $cookieStore.remove("email");
                  }

              })
              .error(function (data, status) {
                  isLoggedIn: false
                  
              });
          }
      };
      return service;
  }]);

  
})();
