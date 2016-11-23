myApp.controller('home-controller', function($scope, artboardFactory, videoFactory, quoteFactory, upcomingFactory){

    // get latest artbnoard on conroller load
    artboardFactory.getLastest(function(callback){
        callback.createdAt = formatDate(callback.createdAt);
        $scope.board = callback;
    });

    // get latest video on controller load
    videoFactory.getLastestVideo(function(result){
        $scope.video = result;
    });

    // get the homepage quote on controller load
    quoteFactory.getQuote(function(result){
        $scope.quote = result;
    });

    // get the upcoming content list on controller load
    upcomingFactory.getUpcoming(function(result){
        $scope.upcoming = result;
    });

});
