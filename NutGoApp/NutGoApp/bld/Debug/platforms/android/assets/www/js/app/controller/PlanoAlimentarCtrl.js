(function(){
    'use strict';


function PlanoAlimentarCtrl() {
	
    var self = this;
    // self.faq = "FAQ";
   
    self.refeicao = [{
        id: 1,
        titulo: "Café da manhã",
        tipoRefeicao: 1,
        horario: '07:00 am'
    }, {
        id: 2,
        titulo: "Lanche",
        tipoRefeicao: 2,
        horario: '10:00 am'
    },{
        id: 3,
        titulo: "Almoço",
        tipoRefeicao: 3,
        horario: '12:00 am'
    }, {
        id: 4,
        titulo: "Lanche da Tarde",
        tipoRefeicao: 4,
        horario: '15:00 pm'
    }, {
        id: 5,
        titulo: "Jantar",
        tipoRefeicao: 5,
        horario: '19:00 pm'
    }];


    /**
     * groups - used for Collapse panels in Tabs and Panels view
     */
    self.opcoes = [
        {
            tituloOpcao: 'Opção - 1',
            conteudo: '- Fruta'
        },
        {
            tituloOpcao: 'Opção - 2',
            conteudo: '- 1 iogurte magro sem pedaços.\n\r- Pão Integral sem açúcar.\r\n- Pão Integral  \r- Pão Integral sem açúcar.1 sem açúcar.'
        }
    ];



    self.getAllOpcaoRefeicaoPorId = function (id) {

        RefeicaoService.getAllOpcaoRefeicaoPorId(id)
                        .success(function (data) {
                            /*
                            angular.forEach(data, function (value, key) {
                                var array = new Array();
                                array.push(value.nome);

                                $scope.cidades.nome.push(value.nome);
                            });
                            */
                        })
                        .error(function (data) {
                            console.log("getAllOpcaoRefeicaoPorId error" + data);
                        })
    }


}

angular
    .module('nutGoApp')
    .controller('PlanoAlimentarCtrl', PlanoAlimentarCtrl)

})();