myApp.factory('userFactory', function($http){
	var factory = {};

	factory.userID = null;

	factory.register_user = function(user, callback){
		$http.post('/register', user).success(function(output){
			callback(output);
		});
	};

	factory.login_user = function(user, callback){
		$http.post('/login', user).success(function(output){
			factory.userID = output.user;
			console.log(output);
			callback(output);
		});
	};

	factory.getUserId = function(callback){
		callback(factory.userID);
	}

  return factory;
});
