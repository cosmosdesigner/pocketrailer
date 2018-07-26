'use strict'

angular.module('movie_detail_module')

.component('movieItem',{
    templateUrl:'/movie_detail/movie-list/movie-item/movie-item.tpl.html',
    controller:'movieItemCtrl',
    controllerAs:'vm',
    bindings:{
        poster:'@',
        titulo:'@',
        plot:'@',
        active:'@'
    },
    bindToController:true
})
.controller('movieItemCtrl',MovieItemCtrl)
function MovieItemCtrl(){
    var vm= this;
}
