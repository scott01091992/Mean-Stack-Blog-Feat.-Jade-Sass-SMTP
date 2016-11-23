myApp.factory('messageFactory', function($http){
	var factory = {};

	factory.send_message = function(message, callback){
		$http.post('/message', message).success(function(output){
			callback(output);
		});
	};

  return factory;
});
