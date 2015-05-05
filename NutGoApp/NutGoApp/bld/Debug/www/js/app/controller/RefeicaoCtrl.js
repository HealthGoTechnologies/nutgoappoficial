(function(){
    'use strict';


function RefeicaoCtrl($scope, $stateParams) {
	
    var self = this;
    // self.faq = "FAQ";

    self.refeicao = [{
        id: 1,
        titulo: "Café da manhã",
        tipoRefeicao: 1,
        horario: '07:00 am',
        isConsumir: true,
        isSuccess: true        
    }, {
        id: 2,
        titulo: "Lanche",
        tipoRefeicao: 2,
        horario: '10:00 am',
        isConsumir: true,
        isSuccess: true
    },{
        id: 3,
        titulo: "Almoço",
        tipoRefeicao: 3,
        horario: '12:00 am',
        isConsumir: true,
        isSuccess: true
    }, {
        id: 4,
        titulo: "Lanche da Tarde",
        tipoRefeicao: 4,
        horario: '15:00 pm',
        isConsumir: true,
        isSuccess: true
    }, {
        id: 5,
        titulo: "Jantar",
        tipoRefeicao: 5,
        horario: '19:00 pm',
        isConsumir: true,
        isSuccess: true
    }];


    /**
     * groups - used for Collapse panels in Tabs and Panels view
     */
    self.opcoes = [
        {
            tituloOpcao: 'Opção - 1',
            opcao: 1,
            conteudo: '- Fruta'
        },
        {
            tituloOpcao: 'Opção - 2',
            opcao: 2,
            conteudo: '- 1 iogurte magro sem pedaços.\n\r- Pão Integral sem açúcar.\r\n- Pão Integral  \r- Pão Integral sem açúcar.1 sem açúcar.'
        }
    ];

    self.opcaoSelecionada = function(opcao){
        console.log(opcao);
    }


    self.getAllOpcaoRefeicao = function () {
       // self.refeicao
    }


    self.getOpcaoRefeicaoPorId = function (id) {

        var obj = [];

        self.refeicao.forEach(function (value) {
            if (value.id == id) {
                obj.push(value);
            }
        });
       
        return obj;

    }
    /*
    self.getOpcaoRefeicaoPorId = function (id) {

        RefeicaoService.getOpcaoRefeicaoPorId(id)
                        .success(function (data) {
                            
                            angular.forEach(data, function (value, key) {
                                var array = new Array();
                                array.push(value.nome);

                                $scope.cidades.nome.push(value.nome);
                            });
                           
                        })
                        .error(function (data) {
                            console.log("getOpcaoRefeicaoPorId error" + data);
                        })
    }
     */


    self.id = $stateParams.id;
    self.refeicaoSelecionada = [];
    var valor = [];

    if (self.id == 0) {
        //getOpcaoRefeicaoPorId(self.id);
        self.refeicaoSelecionada.push({isSuccess: false});

    } else {
       
        valor = self.getOpcaoRefeicaoPorId(self.id);
        if(valor.length != 0){
            self.refeicaoSelecionada.push(valor.pop());
        }
        console.log(self.refeicaoSelecionada);
    }

}

angular
    .module('nutGoApp')
    .controller('RefeicaoCtrl', RefeicaoCtrl)

})();