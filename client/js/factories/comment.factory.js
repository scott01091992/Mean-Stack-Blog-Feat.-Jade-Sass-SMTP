myApp.factory('commentFactory', function($http){
	var factory = {};

	factory.create_comment = function(comment, callback){
		$http.post('/comment', comment).success(function(output){
			console.log(output);
			callback(output);
		});
	};

	factory.like_comment = function(data, callback){
		$http.post('/like', data).success(function(output){
			callback(output);
		})
	}

	factory.dislike_comment = function(data, callback){
		$http.post('/dislike', data).success(function(output){
			callback(output);
		})
	}

  return factory;
});
