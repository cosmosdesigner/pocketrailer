'use strict'

angular.module('myApp')
.component('buttonPt',{
    templateUrl:'/components/button/button.tpl.html',
    controller:'buttonCtrl',
    controllerAs:'vm',
    bindings:{
        label:'@',
        disabledBot:'='
    }
})
.controller('buttonCtrl', ButtonCtrl)

function ButtonCtrl(){
    var vm=this;
    console.log(vm.disabledBot)
    vm.textLabel=vm.label
   
}
   

