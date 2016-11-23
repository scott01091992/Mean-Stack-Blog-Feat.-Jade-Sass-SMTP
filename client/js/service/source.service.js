myApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

myApp.filter('formatDate', function(){
    return function(input){
        return formatDate(input);
    }
})
