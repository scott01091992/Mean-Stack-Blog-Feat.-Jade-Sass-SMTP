myApp.factory('quoteFactory', function($http){
	var factory = {};

    factory.getQuote = function(callback){
        $http.get('/quote').success(function(result){
            callback(result);
        })
    }

  return factory;
});
