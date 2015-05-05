angular.module('nutGoApp')
  .factory('FifaService', ['$http',
    function ($http) {
        return {
            getTeams: function () {
                return $http.get('/api/team');
            },

            getTeamDetails: function (code) {
                return $http.get('/api/team/' + code);
            }
        }
    }])
  .factory('UserService', ['$cookieStore', '$http', function ($cookieStore, $http) {
      console.log("UserService");

      var service = {
          isLoggedIn: false,

          session: function (user) {
              console.log("session");
              console.log(user);
              var email = user.email;
              $cookieStore.put("email", email);
          },

          login: function (user) {
             
              return $http({
                  url: 'http://gvoigt.com.br/webservice/testeWeb.php?callback=JSON_CALLBACK&codigo=meus_dado',
                  method: "GET",
                  params: { email: user.email, senha: user.senha },
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
                  headers: { 'Content-Type': 'application/javascript' }
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