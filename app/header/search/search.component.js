'use strict'

angular.module('header_module')
.component('searchBar',{
    templateUrl:'/header/search/search.tpl.html',
    controller:'searchCtrl',
    controllerAs:'vm'
})
.controller('searchCtrl',SearchCtrl)
function SearchCtrl(){
    var vm=this;
}