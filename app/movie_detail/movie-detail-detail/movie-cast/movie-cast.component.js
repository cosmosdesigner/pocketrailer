'use strict'

angular.module('movie_detail_module')
.component('movieCast',{
    templateUrl:'/movie_detail/movie-detail-detail/movie-cast/movie-cast.tpl.html',
    controller:'movieCastCtrl',
    controllerAs:'vm',
    bindings:{
        cast:'='
    }
})
.controller('movieCastCtrl',MovieCast)
function MovieCast(){
    var vm=this;
    vm.allCast=vm.cast;
}
