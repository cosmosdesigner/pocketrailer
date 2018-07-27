'use strict';

// Declare app level module which depends on views, and components


angular.module('myApp', [
  'ngRoute',
  'ngYoutubeEmbed',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'header_module',
  'movie_detail_module'

])
.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({ redirectTo: '/view1' });
  }])
  .controller('yt', Yt)
  .component('yt', {
    template: '<ng-youtube-embed video="vm.vidUrl" width="100%" height="500" autoplay="true" color="white"disablekb="true"></ng-youtube-embed>',
    controller: 'yt',
    controllerAs: 'vm'
  })
function Yt() {
  var vm = this;
  vm.vidUrl = 'https://www.youtube.com/watch?v=Q0CbN8sfihY'
}