/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($httpProvider, $stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    // $urlRouterProvider.otherwise("/login");
    // $urlRouterProvider.otherwise("/nova_senha");
    // $urlRouterProvider.otherwise("cadastro_usuario/cadastro_completo");
    // $urlRouterProvider.otherwise("graf/grafico");
     $urlRouterProvider.otherwise("perfil/perfil_usuario");
    // $urlRouterProvider.otherwise("/login");
    // $urlRouterProvider.otherwise("conversa/conversa_mensagem_pessoal");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        /************ Pagina NutGo - login *************/
        /*
        .state('l', {
            abstract: true,
            url: "/l",
            templateUrl: "index.html",
        })
        .state('l.login', {
            url: "/login",
            templateUrl: "login.html",
            data: { pageTitle: 'Login' },
            controller: "LoginCtrl"
        })
        */
        .state('login', {
            url: "/login",
            templateUrl: "login.html",
            data: { pageTitle: 'Login' },
            controller: "LoginCtrl"
        })
        .state('logout', {
            url: "/logout",
            templateUrl: "login.html",
            data: { pageTitle: 'Login' },
            controller: LogoutCtrl
        })
        .state('recuperar_senha', {
            //abstract: true,
            url: "/recuperar_senha",
            templateUrl: "recuperar_senha.html"
            , controller: function($scope){
                $scope.warningMsgEmailNaoExiste = { 'visibility': 'hidden', 'display': 'none' };
            }
        })
         .state('codigo_verificador_senha', {
             //abstract: true,
             url: "/codigo_verificador_senha",
             templateUrl: "codigo_verificador_senha.html"
         })
        .state('nova_senha', {
            //abstract: true,
            url: "/nova_senha",
            templateUrl: "nova_senha.html"
        })
        .state('criar_conta', {
            url: "/criar_conta",
            templateUrl: "criar_conta.html"
            ,controller: function($scope){
                $scope.msgWarning = { "visibility": "hidden", "display": "none" }
                $scope.warningMsgEmailJaExiste = { "visibility": "hidden", "display": "none" }
            }
        })
         .state('erro_criar_conta', {
             url: "/erro_criar_conta",
             templateUrl: "criar_conta.html"
             , controller: function ($scope) {
                 $scope.erro = true;
             }
         })
         .state('termos', {
             url: "/termos",
             templateUrl: "termos.html"
         })
        .state('politica', {
            abstract: true,
            url: "/politica",
            templateUrl: "views/common/content_principal.html"
        })
        .state('politica.politica_privacidade', {
            url: "/politica_privacidade",
            templateUrl: "politica.html"
        })
        .state('perfil', {
            abstract: true,
            url: "/perfil",
            controller: function ($scope, $stateParams) {
                $scope.titulo = "Perfil";
                $scope.tab = 1;
                //MenuCtrl.selecionarMenu();
                /*$stateParams.titulo = "teste123"*/
            },
            templateUrl: "views/common/content_sem_rodape.html",
        })
        .state('perfil.perfil_nutricionista', {
            url: "/perfil_nutricionista",
            data: { pageTitle: 'CSS Animations' },
            templateUrl: "views/perfil/perfil_nutricionista.html"
        })
        .state('perfil.perfil_clinica', {
            url: "/perfil_clinica",
            data: { pageTitle: 'CSS Animations' },
            templateUrl: "views/perfil/perfil_clinica.html"
        })
         .state('perfil.perfil_usuario', {
             url: "/perfil_usuario",
             data: { pageTitle: 'CSS Animations' },
             templateUrl: "views/perfil/perfil_usuario.html"
             ,resolve: {
                 loadPlugin: function ($ocLazyLoad) {
                     return $ocLazyLoad.load([
                         {
                             serie: true,
                             name: 'angular-flot',
                             files: ['js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
                         }
                     ]);
                 }
             }
         })
         .state('pesquisa', {
             abstract: true,
             url: "/pesquisa",
             controller: function ($scope, $stateParams) {
                 $scope.titulo = "Pesquisa";
                 $scope.tab = 4;
                 /*$stateParams.titulo = "teste123"*/
             },
             templateUrl: "views/common/content_sem_rodape.html"
         })
        .state('pesquisa.pesquisa_principal', {
            url: "/pesquisa_principal",
            controller: function ($scope) {
                $scope.titulo = "Teste";
            },
            /*params: { titulo: "Perfil Nutricionista" }, */
            data: { titulo: 'CSS Animations' },
            templateUrl: "views/pesquisa/pesquisar.html"
        })
        .state('pesquisa.pesquisa_nutricionistas', {
            url: "/pesquisa_nutricionistas",
            data: { pageTitle: 'CSS Animations' },
            templateUrl: "views/pesquisa/pesquisar_nutricionista.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                        }
                        ,
                         {
                             serie: true,
                             name: 'ui.checkbox',
                             files: ['js/bootstrap/angular-bootstrap-checkbox.js']
                         },
                         {
                             name: 'ui.knob',
                             files: ['js/plugins/jsKnob/jquery.knob.js', 'js/plugins/jsKnob/angular-knob.js']
                         },
                          {
                              files: ['css/plugins/ionRangeSlider/ion.rangeSlider.css', 'css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css', 'js/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                          },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['css/plugins/nouslider/jquery.nouislider.css', 'js/plugins/nouslider/jquery.nouislider.min.js', 'js/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/datePicker.js']
                        },
                        {
                            files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                        },
                        {
                            name: 'ui.switchery',
                            files: ['css/plugins/switchery/switchery.css', 'js/plugins/switchery/switchery.js', 'js/plugins/switchery/ng-switchery.js']
                        }
                    ]);
                }
            }
        })
        .state('pesquisa.pesquisa_clinicas', {
            url: "/pesquisa_clinicas",
            data: { pageTitle: 'CSS Animations' },
            templateUrl: "views/pesquisa/pesquisar_clinica.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                        }
                        ,
                         {
                             serie: true,
                             name: 'ui.checkbox',
                             files: ['js/bootstrap/angular-bootstrap-checkbox.js']
                         },
                         {
                             name: 'ui.knob',
                             files: ['js/plugins/jsKnob/jquery.knob.js', 'js/plugins/jsKnob/angular-knob.js']
                         },
                          {
                              files: ['css/plugins/ionRangeSlider/ion.rangeSlider.css', 'css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css', 'js/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                          },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['css/plugins/nouslider/jquery.nouislider.css', 'js/plugins/nouslider/jquery.nouislider.min.js', 'js/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/datePicker.js']
                        },
                        {
                            files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                        },
                        {
                            name: 'ui.switchery',
                            files: ['css/plugins/switchery/switchery.css', 'js/plugins/switchery/switchery.js', 'js/plugins/switchery/ng-switchery.js']
                        }
                    ]);
                }
            }
        })
         .state('configuracao', {
              abstract: true,
              url: "/configuracao",
              controller: function ($scope, $stateParams) {
                  $scope.titulo = "Configuração";
              },
              templateUrl: "views/common/content_sem_rodape.html",
          })
        .state('configuracao.configuracao_aplicativo', {
            url: "/configuracao_aplicativo",
            data: { pageTitle: 'CSS Animations' },
            templateUrl: "views/configuracao_aplicativo.html"
           /* resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/iCheck/icheck.min.js',
                                    'js/plugins/switchery/ng-switchery.js',
                                    'js/plugins/switchery/switchery.js',
                                    'js/plugins/datapicker/bootstrap-datepicker.js',
                                    'js/plugins/datapicker/datePicker.js',
                                    'js/plugins/datapicker/datePickerUtils.js',
                                    'js/plugins/datapicker/dateRange.js',
                                    'js/plugins/datapicker/input.js',
                                    'js/plugins/ionRangeSlider/ion.rangeSlider.min.js',
                                    'js/plugins/nouslider/angular-nouislider.js',
                                    'js/plugins/nouslider/jquery.nouislider.min.js',
                                    'js/plugins/jasny/jasny-bootstrap.min.js',
                                    'js/plugins/chosen/chosen.jquery.js',
                                    'js/plugins/chosen/chosen.js',
                                    'js/plugins/colorpicker/bootstrap-colorpicker-module.js',
                                    'js/plugins/jsKnob/angular-knob.js',
                                    'js/plugins/jsKnob/jquery.knob.js',

                                    'css/plugins/nouslider/jquery.nouislider.css',
                                    'css/plugins/chosen/chosen.css',
                                    'css/plugins/switchery/switchery.css',
                                    'css/plugins/jasny/jasny-bootstrap.min.css',
                                    'css/plugins/nouslider/jquery.nouislider.css',
                                    'css/plugins/datapicker/angular-datapicker.css',
                                    'css/plugins/datapicker/datepicker3.css',
                                    'css/plugins/ionRangeSlider/ion.rangeSlider.css',
                                    'css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css',
                                    'css/plugins/ionRangeSlider/ion.rangeSlider.skinNice.css',
                                    'css/plugins/ionRangeSlider/ion.rangeSlider.skinSimple.css',
                                    'css/plugins/iCheck/custom.css']
                        }
                    ]);
                }
            } */
        })
        .state('contato', {
            abstract: true,
            url: "/contato",
            controller: function ($scope, $stateParams) {
                $scope.titulo = "Contato";
            },
            templateUrl: "views/common/content_sem_rodape.html"
        })
        .state('contato.contato_healthgo', {
            url: "/contato_healthgo",
            templateUrl: "views/contato_nutgo.html"
        })
        .state('plano', {
         abstract: true,
         url: "/plano",
         controller: function ($scope, $stateParams) {
             $scope.titulo = "Plano Alimentar";
             $scope.tab = 2;
         },
         templateUrl: "views/common/content_sem_rodape.html"
        })
        .state('plano.plano_alimentar', {
            url: "/plano_alimentar",
            templateUrl: "views/plano_alimentar.html"
            , controller: "PlanoAlimentarCtrl"
        })
        .state('ref', {
            abstract: true,
            url: "/ref",
            controller: function ($scope, $stateParams) {
                $scope.titulo = "Refeição";
                $scope.tab = 3;
            },
            templateUrl: "views/common/content_sem_rodape.html"
        })
        .state('ref.refeicao', {
            url: "/refeicao/:id",
            templateUrl: "views/refeicao.html"
           /*
            templateUrl: function (params) {
               // debugger;
                
            }
            */
            , controller: "RefeicaoCtrl"
            ,resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([
                {
                    name: 'ui.knob',
                    files: ['js/plugins/jsKnob/jquery.knob.js','js/plugins/jsKnob/angular-knob.js']
                },
                {
                    files: ['css/plugins/ionRangeSlider/ion.rangeSlider.css','css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css','js/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                },
                {
                    insertBefore: '#loadBefore',
                    name: 'localytics.directives',
                    files: ['css/plugins/chosen/chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                }, 
                {
                    name: 'nouislider',
                    files: ['css/plugins/nouslider/jquery.nouislider.css','js/plugins/nouslider/jquery.nouislider.min.js','js/plugins/nouslider/angular-nouislider.js']
                },
                {
                    files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                },
                {
                    name: 'ui.switchery',
                    files: ['css/plugins/switchery/switchery.css','js/plugins/switchery/switchery.js','js/plugins/switchery/ng-switchery.js']
                },
                {
                    name: 'colorpicker.module',
                    files: ['css/plugins/colorpicker/colorpicker.css','js/plugins/colorpicker/bootstrap-colorpicker-module.js']
                },
                 {
                     files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                 }

            ]);
        }
    }
           // , controllerAs: "refCtrl" // Alias
        })
        .state('ajuda', {
            abstract: true,
            url: "/ajuda",
            controller: function ($scope, $stateParams) {
                $scope.titulo = "Ajuda";
            },
            templateUrl: "views/common/content_sem_rodape.html"
        })
        .state('ajuda.ajuda_usuario', {
            url: "/ajuda_usuario",
            controller: function ($scope, $stateParams) {
                $scope.isFaq = true;
                $scope.faq = "FAQ";
                $scope.comoUsarSistema = true;
                $scope.faqPagina = "ajuda.faq";
            },
            templateUrl: "views/ajuda.html"
        })
        .state('ajuda.faq', {
            url: "/ajuda_faq",
            controller: function ($scope, $stateParams) {
                $scope.faq = true;
                $scope.faqPagina = "ajuda.faq";
                },
            templateUrl: "views/faq.html"
        })
        .state('chat', {
            abstract: true,
            url: "/chat",
            controller: function ($scope, $stateParams) {
                $scope.titulo = "Conversas";
            },
            templateUrl: "views/common/content_sem_rodape.html"
        })
        .state('chat.conversas', {
            url: "/chat_conversas",
            templateUrl: "views/chat/chat_conversas.html"
        })
        .state('conversa', {
            abstract: true,
            url: "/conversa",
            controller: function ($scope, $stateParams) {
                $scope.titulo = "Conversas";
            },
            templateUrl: "views/common/content_rodape_mensagem.html"
        })
        .state('conversa.mensagem_pessoal', {
            url: "/conversa_mensagem_pessoal",
            templateUrl: "views/chat/chat_conversa_pessoal.html"
        })
         .state('termos_privacidade', {
             abstract: true,
             url: "/termos",
             controller: function ($scope, $stateParams) {
                 $scope.titulo = "Termos";
             },
             templateUrl: "views/common/content_sem_rodape.html"
         })
        .state('termos_privacidade.termo_uso', {
            url: "/termo_uso",
            templateUrl: "views/termo_uso.html"
        })
        .state('graf', {
            abstract: true,
            url: "/graf",
            controller: function ($scope, $stateParams) {
                $scope.titulo = "Gráfico";
                $scope.tab = 2;
            },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            name: 'angular-flot',
                            files: ['js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
                        }
                    ]);
                }
            },
            templateUrl: "views/common/content_sem_rodape.html"
        })
         .state('graf.grafico', {
             url: "/grafico",
             templateUrl: "views/graph_flot.html"
         })
        .state('alertas', {
            abstract: true,
            url: "/alertas",
            controller: function ($scope, $stateParams) {
                $scope.titulo = "Alertas";
            },
            templateUrl: "views/common/content_sem_rodape.html"
        })
         .state('cadastro_usuario', {
             abstract: true,
             url: "/cadastro_usuario",
             controller: function ($scope, $stateParams) {
                 $scope.titulo = "Cadastro";
             },
             templateUrl: "views/common/content_sem_rodape.html"
         })
        .state('cadastro_usuario.cadastro_completo', {
            url: "/cadastro_completo",
            templateUrl: "views/cadastro_completo_usuario.html",
            controller: function ($scope, $stateParams) {
                $scope.titulo = "Cadastro";
                $scope.msgWarning = { "visibility": "hidden", "display": "none" }
            },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/iCheck/custom.css','js/plugins/iCheck/icheck.min.js']
                        }
                        ,
                         {
                             serie: true,
                             name: 'ui.checkbox',
                             files: ['js/bootstrap/angular-bootstrap-checkbox.js']
                         },
                         {
                             name: 'ui.knob',
                             files: ['js/plugins/jsKnob/jquery.knob.js','js/plugins/jsKnob/angular-knob.js']
                          },
                          {
                               files: ['css/plugins/ionRangeSlider/ion.rangeSlider.css','css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css','js/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                          },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['css/plugins/nouslider/jquery.nouislider.css','js/plugins/nouslider/jquery.nouislider.min.js','js/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/datePicker.js']
                        },
                        {
                            files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                        },
                        {
                            name: 'ui.switchery',
                            files: ['css/plugins/switchery/switchery.css','js/plugins/switchery/switchery.js','js/plugins/switchery/ng-switchery.js']
                        },
                        {
                            name: 'colorpicker.module',
                            files: ['css/plugins/colorpicker/colorpicker.css','js/plugins/colorpicker/bootstrap-colorpicker-module.js']
                        },
                        {
                            name: 'ngImgCrop',
                            files: ['js/plugins/ngImgCrop/ng-img-crop.js','css/plugins/ngImgCrop/ng-img-crop.css']
                        }
                    ]);
                }
            }
        })
        .state('alertas.notificacao_alertas', {
            url: "/notificacao_alertas",
            templateUrl: "views/notificacao_alertas.html"
        });
}
angular
    .module('nutGoApp')
    .config(config)
    /*
    .run(function ($rootScope, $state, $cookieStore) {

        $rootScope.$state = $state;

        console.log("config - rootscope");

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
           // var requireLogin = toState.data.requireLogin;

            var email = $cookieStore.get("email");

            if(email != ""){
                
            }
           
        });

    });
    */