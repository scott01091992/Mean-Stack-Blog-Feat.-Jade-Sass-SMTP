myApp.factory('replyFactory', function($http){
	var factory = {};

    factory.create_reply = function(reply, callback){
		$http.post('/reply', reply).success(function(output){
			callback(output);
		});
	};


  return factory;
});
