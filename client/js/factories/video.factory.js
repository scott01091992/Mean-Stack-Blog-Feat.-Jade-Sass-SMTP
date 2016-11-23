myApp.factory('videoFactory', function($http){
	var factory = {};

	factory.getLastestVideo = function(callback){
        $http.get('/video').success(function(result){
            callback(result);
        })
    }

	factory.getVideos = function(callback){
        $http.get('/videos').success(function(result){
            callback(result);
        })
    }


  return factory;
});
