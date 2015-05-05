(function(){
		'use strict';

angular.module('nutGoApp').config(["$httpProvider", function ($httpProvider) {
       $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
           return {
               'request': function (config) {
                   config.headers = config.headers || {};

                   if (config.method == "POST") {
                      /*
                       if (config.url == "http://nutgoweb.azurewebsites.net/token") {
                        var valores = config.data;
                        var arrayData = valores.split("&");
                        var grantType = arrayData[0];
                       }
                       */
                       if (config.headers.Accept == "") {
                           
                           if ($localStorage.token) {
                               config.headers.Authorization = $localStorage.tokenType + ' ' + $localStorage.token;
                           } else {
                               config.headers.Authorization = "";
                           }

                           config.headers.post = { 'Content-Type': 'application/json' }
                       
                       } 
                       
                   } else if (config.method == "GET") {

                       if ($localStorage.token) {
                           config.headers.Authorization = $localStorage.tokenType + ' ' + $localStorage.token;
                       }

                       config.headers.get = { 'Content-Type': 'application/json' }

                   } else if (config.method == "PUT") {
                       config.headers.put = { 'Content-Type': 'application/json' }

                   } else if (config.method == "DELETE") {
                       config.headers.delete = { 'Content-Type': 'application/json' }
                   }
                   return config;
               },
               /* On request failure
               'requestError': function (rejection) {
                   // console.log(rejection); // Contains the data about the error on the request.

               },

               'response': function(response) {
                  
               },
               */
               'responseError': function(response) {
                   if(response.status === 401 || response.status === 403) {
                       $location.path('/login');
                   }
                   return $q.reject(response);
               }

           };
       }]);
}]);


})();
