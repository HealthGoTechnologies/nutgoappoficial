(function(){
    'use strict';


function AjudaCtrl() {
	
    var self = this;
   // self.faq = "FAQ";

    self.ajuda = {
        faq: "FAQ1",
        isFaq: true,
        paginaFaq: "ajuda.faq"
    };


}

angular
    .module('nutGoApp')
    .controller('AjudaCtrl', AjudaCtrl)

})();