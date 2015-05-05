(function(){
	'use strict';
	
angular.module('nutGoApp')
  .factory('deviceReady', function () {
      return function (done) {
          if (typeof window.cordova === 'object') {
              document.addEventListener('deviceready', function () {
                  debugger;
                  done();
              }, false);
          } else {
              done();
          }
      };
  });
  
})();
