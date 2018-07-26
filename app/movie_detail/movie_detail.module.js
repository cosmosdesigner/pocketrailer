'use strict'

angular.module('movie_detail_module',[])
.filter('onlyFirstTwenty',OnlyFirstTwenty)
function OnlyFirstTwenty(){
    return function(str){
        return str.slice(0,200);
    }
}