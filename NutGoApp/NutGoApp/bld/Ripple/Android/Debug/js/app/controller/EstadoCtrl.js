(function(){
    'use strict';


function EstadoCtrl(EstadoService, $scope) {
		var self = this;
		
            /*Para testes*/
            $scope.estados = [
                   { id: '1', nome: 'Distrito Federal' },
                   { id: '2', nome: 'São Paulo' },
                   { id: '3', nome: 'Goiás' }
              //     ,{ id: '', nome: '' }
            ];

            $scope.estados.push({ id: '', nome: '' });
    
       /*
             $scope.estados = {
                     nome: []
             };
            
             angular.forEach($scope.x, function (value, key) {
                 var array = new Array();
                 array.push(value.nome);

                 $scope.estados.nome.push(value.nome);
             });
             $scope.estados.nome.push("");
             */
            // debugger;
            //$scope.estados2 = arrayEstados;
            // self.faq = "FAQ";

            self.estado = {
                id: $scope.id,
                nome: $scope.estado
            };

            self.getEstados = function () {

                EstadoService.getEstados()
                                .success(function (data) {

                                    /*
                                    objEstado = JSON.parse(data);
                                    angular.forEach($scope.x, function (value, key) {
                                        var array = new Array();
                                        array.push(value.nome);

                                        $scope.estados.nome.push(value.nome);
                                    });
                                    $scope.estados.nome.push("");
                                    */
                                })
                                .error(function () {


                                });
            }

            self.getEstadoPorId = function () { }

}

angular
    .module('nutGoApp')
    .controller('EstadoCtrl', EstadoCtrl)

})();