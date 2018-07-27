'use strict'

angular.module('header_module')
.component('headerLogo',{
    templateUrl:'/header/logo/logo.tpl.html',
    controller:'headerlogoCtrl',
    controllerAs:'vm',
    bindings:{
        nome:'@nome'
    }

})
.controller('headerlogoCtrl',HeaderlogoCtrl)
function HeaderlogoCtrl(){
    var vm=this;
}