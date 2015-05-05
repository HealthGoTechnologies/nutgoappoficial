(function () {
    'use strict';

function PaisCtrl($scope) {

    var self = this;
    
    $scope.paises = [
      { id: '1', nome: 'Brasil' },
      { id: '2', nome: 'Portugual' }
    ];


    self.pais = {
        id: $scope.id,
        nome: $scope.pais
    };

    // self.faq = "FAQ";

    self.getPaises = function () {

        PaisService.getPaises()
                        .success(function (data) {

                        })
                        .error(function () {


                        });
    }

    self.getPaisesPorId = function () { }


}

angular
    .module('nutGoApp')
    .controller('PaisCtrl', PaisCtrl)

})();