
var Artboard = mongoose.model('Artboard');
var Comment = mongoose.model('Comment');
var Reply = mongoose.model('Reply');
var User = mongoose.model('User');

module.exports = (function(){

	return{
		create: function(req, res){
			var artboard = new Artboard(req.body);
			artboard.save(function(err){
				if(err){
					console.log(err);
				}else{
					console.log('saved');
					res.json({status: 'success'});
				}
			})
    	},
		index: function(req, res){
			Artboard.find({}).populate('_comments').exec(function(err, artboard){
				if(err){
					console.log(err);
				}else{
					Comment.populate(artboard, {path: '_comments._replies', model: 'Reply'}, function(err, popAnswers){
						if(err){
							console.log(err);
						}else{
							Reply.populate(popAnswers, {path: '_replies._user', model: 'User'}, function(err, result){
								if(err){
									console.log(err);
								}else{
									res.json(result);
								}
							})
						}
					})
				}
			})
		},
		latest: function(req, res){
			Artboard.findOne().sort({field: 'asc', _id: -1}).limit(1).populate('_comments').exec(function(err, artboard){
				if(err){
					console.log(err);
				}else{
					Comment.populate(artboard, {path: '_comments._replies', model: 'Reply'}, function(err, popAnswers){
						if(err){
							console.log(err);
						}else{
							Reply.populate(popAnswers, {path: '_replies._user', model: 'User'}, function(err, result){
								if(err){
									console.log(err);
								}else{
									console.log(result);
									res.json(result);
								}
							})
						}
					})
				}
			})
		}
	}

})();
