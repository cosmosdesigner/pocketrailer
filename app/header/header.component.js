'use strict'
angular.module('header_module')
.component('wrapperHeader',{
    templateUrl:'/header/header.tpl.html',
    controller:'headerCtrl',
    controllerAs:'vm'
})
.controller('headerCtrl',HeaderCtrl)

function HeaderCtrl(){
    var vm=this;
    vm.gameOfThrones="almost there";
}