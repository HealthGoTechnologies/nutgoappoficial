(function(){
	'use strict';

function PesquisaCtrl() {

    var self = this;
    /*
    estados = [
        {id: 1, nome: "S�o Paulo" } 
        ,{id: 2, nome: "Distrito Federal" } 
        ,{id: 3, nome: "Rio de Janeiro" } 
    ];

    cidades = [
         { id: 1, nome: "Bras�lia" }
        , { id: 2, nome: "Blumenau" }
        , { id: 3, nome: "Rio de Janeiro" }
    ];
    */
    self.pesquisa = {
        estado: self.estado,
        cidade: self.cidade,
        palavras: self.palavras
    };

    self.pesquisaGeral = function () {
        
        PesquisaService.pesquisaGeral()
                            .success(function () {

                            })
                            .error(function (data) {
                                console.log("pesquisaGeral error:" + data);
                            })
    }

    self.pesquisaNutricionistas = function () {

    }

    self.pesquisaClinicas = function () {

    }

}

angular
    .module('nutGoApp')
    .controller('PesquisaCtrl', PesquisaCtrl)
	
})();