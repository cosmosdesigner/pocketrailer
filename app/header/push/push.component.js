'use strict'
angular.module('header_module')
.component('pushNotification',{
    templateUrl:'/header/push/push.tpl.html',
    controller:'pushCtrl',
    controllerAs:'vm'
})
.controller('pushCtrl',PushCtrl)
PushCtrl.$inject=['$scope','push'];
function PushCtrl($scope,push){
    var vm=this;
    vm.countPus=0;
    $scope.$watch(function () {
        return push.getPushCount()
    }, function (newV, oldV) {
        if (newV !== oldV) {
            vm.countPush=newV;
        }
    })
   
}