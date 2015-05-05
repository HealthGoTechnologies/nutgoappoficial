(function(){
		'use strict';

angular.module('nutGoApp')
  .factory('EstadoService', ['$cookieStore', '$http', function ($cookieStore, $http) {
      console.log("EstadoService");

      var urlNutGoWeb = "http://nutgowebapi.azurewebsites.net/api/usuario";

      var service = {
          
          getEstados: function () {
              
                return $http.get(urlNutGoWeb, 
                                    {
                                        headers: {
                                                  'Content-Type': 'application/json'
                                        }
                                    })
                             .success(function (data, status) {
                               
                             })
                              .error(function (data, status) {
                                
                            });
                              
          }
      };
      return service;
  }]);
 
 
})();
