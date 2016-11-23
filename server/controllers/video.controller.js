var User = mongoose.model('User');
var Comment = mongoose.model('Comment');
var Video = mongoose.model('Video');
var Reply = mongoose.model('Reply');

module.exports = (function(){

	return{
		create: function(req, res){
			var video = new Video(req.body);
			video.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.json({status: 'success'});
				}
			})
    	},
		index: function(req, res){
			Video.find({}).populate('_comments').exec(function(err, video){
				if(err){
					console.log(err);
				}else{
					Comment.populate(video, {path: '_comments._replies', model: 'Reply'}, function(err, popVideos){
						if(err){
							console.log(err);
						}else{
							Reply.populate(popVideos, {path: '_replies._user', model: 'User'}, function(err, result){
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
			console.log('working');
			Video.findOne().sort({field: 'asc', _id: -1}).limit(1).exec(function(err, video){
				if(err){
					console.log(err);
				}else{
					console.log(video);
					res.json(video);
				}
			});
		}
	}

})();
