(function(){
    'use strict';
	
function UsuarioCtrl(UsuarioService, $location, $scope) {
	
    var self = this;
	
    function verificarSenha(usuario) {
        
        if (usuario.Senha == usuario.ConfirmarSenha) {
            return true;
        } else {
            return false;
        }
    };

    var redirecionarPaginaLogin = function () {
        var timer = $timeout(function () {
            $timeout.cancel(timer);
            $location.path('/login');
        }, 2000);
    }


    self.usuarioSimples = {
        Nome: self.nome,
        Email: self.email,
        Senha: self.senha,
        ConfirmarSenha: self.confirmarSenha
    };

    self.usuario = {
        nome: self.nome,
        email: self.email,
        rg: self.rg,
        cpf: self.cpf,
        sexo: self.sexo,
        dtNascimento: self.dtNascimento,
        telefone: self.telefone,
        cep: self.cep,
        endereco: self.endereco,
        numero: self.numero,
        complemento: self.complemento,
        bairro: self.bairro,
        cidade: self.cidade,
        estado: self.estado,
        pais: self.pais,
        senha: self.senha,
        confirmarSenha: self.confirmarSenha
    };

    self.cadastrarUsuario = function () {
       
        if(verificarSenha(self.usuarioSimples)){

            UsuarioService.cadastrarUsuario(self.usuarioSimples)
                                .success(function (data) {

                                    if (data.isSuccess == true) {

                                        navigator.notification.alert("teste", null, "Informação", "OK");
                                          $scope.msgWarning = {'visibility': 'visible', 'display': ''};
                                          $scope.msgErro = 'Você será redirecionado para o login dentro 2 segundos.';
                                          redirecionarPaginaLogin();
                                        // Colocar mensagem: Usuário salvo com sucesso e encaminhar para o login.
                                       // $location.path("/login");
                                    } else {
                                
                                
                                        if(data.action.name == "validationError"){
                                            $scope.msgWarning = { 'visibility': 'visible', 'display': '' };
                                            $scope.msgErro = data.action.name.validationErros.message;
                                        }

                                        if (data.action.name == "error") {
                                   
                                            if (data.action.exception.Message == "Passwords must be at least 6 characters.") {
                                                $scope.msgErro = "A senha deve ter ao menos 6 caracteres.";
                                            }


                                            var msgEmail = "Name " + self.usuarioSimples.Email + " is already taken.";
                                            console.log(msgEmail);

                                            if (data.action.exception.Message == msgEmail) {
                                                $scope.msgWarning = { 'visibility': 'visible', 'display': '' };
                                                $scope.msgErro = "O e-mail informado já foi cadastrado.";

                                            }
                                        }

                                    }
                                })
                                .error(function (data, status) {
                                    console.log("cadastrarUsuario error:" + data);
                                })
     
        } else {
            $scope.msgWarning = { 'visibility': 'visible', 'display': '' };
            $scope.msgErro = "As senhas não conferem.";

        }
        
     };
  

    self.redefinirSenha = function () {
        
        UsuarioService.redefinirSenha(self.usuarioSimples)
                            .success(function (data) {
                                
                                if (data.isSuccess == true) {

                                    $location.path("/login");
                                } else if (data.isSuccess == false) { 
                                   
                                    $scope.warningMsgEmailNaoExiste = { 'visibility': 'visible', 'display':'' };
                                  //  $scope.erro = true;
                                    //$location.path("/erro_recuperar_senha");
                                }
                            })
                            .error(function (data, status) {
                                console.log("redefinirSenha Error:" + data);
                            })
                            
    };

    self.limparCadastroUsuario = function () {
        self.usuarioSimples.nome;
    };

    self.cadastrarCompletoUsuario = function () {
        console.log(self.usuario);
        if(verificarSenha(self.usuario)){

            UsuarioService.cadastrarUsuarioCompleto(self.usuario)
                                .success(function (data) {

                                    if (data.isSuccess == strue) {

                                        navigator.notification.alert("teste", null, "Informação", "OK");

                                        // Colocar mensagem: Usuário salvo com sucesso e encaminhar para o login.
                                        $location.path("/login");
                                    } else {


                                        if (data.action.name == "validationError") {
                                            $scope.msgWarning = { 'visibility': 'visible', 'display': '' };
                                            $scope.msgErro = data.action.name.validationErros.message;
                                        }

                                        if (data.action.name == "error") {

                                            if (data.action.exception.Message == "Passwords must be at least 6 characters.") {
                                                $scope.msgErro = "A senha deve ter ao menos 6 caracteres.";
                                            }


                                            var msgEmail = "Name " + self.usuarioSimples.Email + " is already taken.";
                                            console.log(msgEmail);

                                            if (data.action.exception.Message == msgEmail) {
                                                $scope.msgWarning = { 'visibility': 'visible', 'display': '' };
                                                $scope.msgErro = "O e-mail informado já foi cadastrado.";

                                            }
                                        }


                                        // $location.path("/erro_criar_conta");
                                    }
                                })
                                .error(function (data, status) {
                                    console.log("cadastrarUsuarioCompleto Error:" + data);
                                })

        } else {

            $scope.msgWarning = { 'visibility': 'visible', 'display': '' };
            $scope.msgErro = "As senhas não conferem.";

        }


    };

    self.getByIdUsuario = function (id) {
        
        UsuarioService.getUsuarioById(id)
                        .success(function (data) {
                            usuario.nome = data.nome;
                            usuario.email = data.email;
                            usuario.rg = data.rg;
                            usuario.cpf = data.cpf;
                            usuario.sexo = data.sexo;
                            usuario.dtNascimento = data.dtNascimento;
                            usuario.telefone = data.telefone;
                            usuario.cep = data.cep;
                            usuario.endereco = data.endereco;
                            usuario.numero = data.numero;
                            usuario.complemento = data.complento;
                            usuario.bairro = data.bairro;
                            usuario.cidade = data.cidade;
                            usuario.estado = data.estado;
                            usuario.pais = data.pais;
                            usuario.senha = data.senha;
                            usuario.confirmarSenha = data.confirmarSenha;
                        })
                        .error(function () {

                        })
    };

    
}


/**
 *
 * Pass all functions into module
 */
angular
    .module('nutGoApp')
    .controller('UsuarioCtrl', UsuarioCtrl)


})();