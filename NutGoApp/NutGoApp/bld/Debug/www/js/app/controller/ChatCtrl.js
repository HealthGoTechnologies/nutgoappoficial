(function(){
    'use strict';

function ChatCtrl() {

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
    .controller('ChatCtrl', ChatCtrl)
})();