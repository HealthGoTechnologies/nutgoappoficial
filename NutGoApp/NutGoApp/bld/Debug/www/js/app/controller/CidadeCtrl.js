(function () {
    'use strict';


function CidadeCtrl($scope) {

    var self = this;
    /*Para testes*/
	   $scope.cidades = [
              { id: '1', nome: 'Brasília' },
              { id: '2', nome: 'São Paulo' },
              { id: '3', nome: 'Goiania' }
              
	   ];
	   $scope.cidades.push({ id: '', nome: '' });
	  
    /*
	   $scope.cidades = {
	       nome: []
	   };
       
    
	   angular.forEach($scope.x, function (value, key) {
	       var array = new Array();
	       array.push(value.nome);
           
	       $scope.cidades.nome.push(value.nome);
	   });
	   debugger;
	   $scope.cidades.nome.push("");
       */
 
   // self.faq = "FAQ";

    self.cidade = {
        id: $scope.id,
        nome: $scope.cidade
    };

    self.getCidades = function () {

        CidadeService.getCidades()
                        .success(function (data) {

                        })
                        .error(function () {


                        });
    }

    self.getCidadesPorId = function () { }


}

angular
    .module('nutGoApp')
    .controller('CidadeCtrl', CidadeCtrl)
})();    