myApp.factory('upcomingFactory', function($http){
	var factory = {};

    factory.getUpcoming = function(callback){
        $http.get('/upcoming').success(function(result){
            callback(result);
        })
    }

  return factory;
});
