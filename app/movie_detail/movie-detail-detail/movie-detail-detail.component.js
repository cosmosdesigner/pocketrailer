'use strict'

angular.module('movie_detail_module')
    .component('movieDetailDetail', {
        templateUrl: '/movie_detail/movie-detail-detail/movie-detail-detail.tpl.html',
        controller: 'movieDetailCtrl',
        controllerAs: 'vm'
    })
    .controller('movieDetailCtrl', MovieDetailCtrl)
MovieDetailCtrl.$inject = ['$scope', 'movies','push']
function MovieDetailCtrl($scope, movies,push) {
    var vm = this;
    vm.allMovies = movies.get()[0];
    vm.movieCast = vm.allMovies.elenco;
    var index=0;
    vm.setPush=function setPush(){
        push.setPushCount();
        vm.allMovies.rented=true;
        movies.update(index,vm.allMovies);
    }

    $scope.$watch(function () {
        return movies.selectedMovieIndex
    }, function (newV, oldV) {
        if (newV !== oldV) {
            index=newV;
            vm.allMovies = movies.get()[newV];
            vm.movieCast = vm.allMovies.elenco;
        }
    })
}