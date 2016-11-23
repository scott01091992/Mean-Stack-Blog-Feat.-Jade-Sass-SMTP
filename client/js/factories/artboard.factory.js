myApp.factory('artboardFactory', function($http){
	var factory = {};

	factory.getArtboards = function(callback){
		$http.get('/artboards').success(function(result){
			callback(result);
		});
	}

	factory.getLastest = function(callback){
		$http.get('/latest').success(function(result){
			callback(result);
		});
	}

  return factory;
});
