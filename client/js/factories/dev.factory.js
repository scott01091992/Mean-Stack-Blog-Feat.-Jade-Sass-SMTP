myApp.factory('devFactory', function($http){
	var factory = {};

	factory.createArtboard = function(artboard, callback){
		$http.post('/dev/artboard', artboard).success(function(output){
			callback(output);
		});
	};

	factory.createVideo = function(video, callback){
		$http.post('/dev/video', video).success(function(output){
			callback(output);
		});
	};

	factory.createQuote = function(quote, callback){
		$http.post('/dev/quote', quote).success(function(output){
			callback(output);
		});
	};

	factory.createUpcomingArray = function(content, callback){
		$http.post('/dev/upcoming', content).success(function(output){
			callback(output);
		});
	};


  return factory;
});
