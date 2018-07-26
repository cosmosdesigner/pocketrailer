'use strict'

angular.module('movie_detail_module')
.component('movieDetail',{
    templateUrl:'/movie_detail/movie_detail.tpl.html',
    controller:'movieDetailCtrl',
    controllerAs:'vm'
})
.controller('movieDetailCtrl',MovieDetailCtrl)
function MovieDetailCtrl(){
    var vm=this;
}