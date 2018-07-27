'use strict'

angular.module('movie_detail_module')
    .component('movieList', {
        templateUrl: 'movie_detail/movie-list/movie-list.tpl.html',
        controller: 'movieListCtrl',
        controllerAs: 'vm',
        bindings: {
            movies: '<'
        }
    })
    .controller('movieListCtrl', MovieListCtrl)

MovieListCtrl.$inject = ['movies'];
function MovieListCtrl(movies) {
    var vm = this;
    vm.selected=0;

    vm.allMovies = movies.get();
    vm.select=function select(selected){
        vm.selected = selected;
        movies.selectedMovie(selected);
    }
}