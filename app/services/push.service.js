'use strict'
angular.module('myApp')
    .service('push', Push)
function Push() {
    var countPush=0;
    this.countPush=0;
    this.setPushCount=function setPushCount(){
        countPush=parseInt(this.countPush)+1;
        this.countPush=countPush;
    }
    this.getPushCount=function getPushCount(){
        return countPush;
    }
}