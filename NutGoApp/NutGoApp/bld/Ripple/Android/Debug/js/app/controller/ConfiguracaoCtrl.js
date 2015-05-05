(function(){
    'use strict';


function ConfiguracaoCtrl($scope, $modal) {
	
    var self = this;
   // self.faq = "FAQ";
    var modalInstance;
    self.configuracao = {
        enviarNotificacao: $scope.enviarNotificacao,
        receberAlerta: $scope.receberAlerta,
        tempoMsgRefeicao: $scope.tempoMsgRefeicao,
        manterConexaoGoogle: $scope.conexaoGoogle,
        manterConexaoFacebook: $scope.conexaoFacebook
    };

    self.tempoAntesDaRefeicao = [
        { id: 1, tempo: '5 minutos' },
        { id: 2, tempo: '10 minutos' },
        { id: 3, tempo: '15 minutos' }
    ];

    $scope.modalAlerta = function () {
        modalInstance = $modal.open({
            templateUrl: 'views/configuracao_modal_frequencia.html'
          // , controller: ModalInstanceCtrl
            
        });
    };

    self.configEnviarNotificacao = function () {
        console.log($scope.configuracao.enviarNotificacao);
    }

    self.configReceberAlertas = function () {
        console.log($scope.configuracao.receberAlerta);
        
    }

    self.configTempoAlertaRefeicao = function ($modal) {
        console.log(self.configuracao.tempoMsgRefeicao);
        debugger;
        $modal.close();
    }


    self.configManterConexaoFacebook = function () {
        console.log($scope.configuracao.conexaoFacebook);
    }

    self.configManterConexaoGoogle = function () {
        console.log($scope.configuracao.conexaoGoogle);
    }

}
    /*
function ModalInstanceCtrl($scope, $modalInstance) {

    var self = this;

    self.configuracao = {
        tempoMsgRefeicao: $scope.tempoMsgRefeicao
    };

    self.tempoAntesDaRefeicao = [
        { id: 1, tempo: '5 minutos' },
        { id: 2, tempo: '10 minutos' },
        { id: 3, tempo: '15 minutos' }
    ];

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        self.configTempoAlertaRefeicao = function () {
            console.log($scope.configuracao.tempoMsgRefeicao);
            $modalInstance.close();
        }

}
*/
angular
    .module('nutGoApp')
    .controller('ConfiguracaoCtrl', ConfiguracaoCtrl)
  //  .controller('ModalInstanceCtrl', ModalInstanceCtrl)

})();