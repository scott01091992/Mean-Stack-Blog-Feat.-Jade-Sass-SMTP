
var Comment = mongoose.model('Comment');
var Artboard = mongoose.model('Artboard');
var Reply = mongoose.model('Reply');
var User = mongoose.model('User');
var Video = mongoose.model('Video');

module.exports = (function(){

	return{
		create: function(req, res){
			if(req.session.user){
				if(req.session.user._id == req.body._user){
					if(req.body.type == "artboard"){
						User.findOne({_id: req.body._user}, function(err, user){
							req.body.username = user.name;
							req.body.likes = 0;
							req.body.dislikes = 0;
							var comm = new Comment(req.body);
							console.log(comm);
							comm.save(function(err){
								if(err){
									console.log(err);
								}
								else{
									Artboard.findByIdAndUpdate({_id: req.body._artboard}, {$push: {_comments: comm._id}}, function(err, comments){
										if(err){
											console.log(err);
										}else{
											res.json(comm);
										}
									})
								}
							});
						})
					}else{
						User.findOne({_id: req.body._user}, function(err, user){
							req.body.username = user.name;
							req.body.likes = 0;
							req.body.dislikes = 0;
							var comm = new Comment(req.body);
							console.log(comm);
							comm.save(function(err){
								if(err){
									console.log(err);
								}
								else{
									Video.findByIdAndUpdate({_id: req.body._video}, {$push: {_comments: comm._id}}, function(err, comments){
										if(err){
											console.log(err);
										}else{
											res.json(comm);
										}
									})
								}
							});
						})
					}
				}else{
					res.json({errors: {message: "User not signed in"}});
				}
			}else{
				res.json({errors: {message: "User is not signed in"}});
			}

    	},
		like: function(req, res){
			User.findOne({_id: req.body.userId}, function(err, user){
				if(user){
					already_liked = false;
					already_disliked = false;
					for(var i = 0; i < user.likes.length; i++){
						if(user.likes[i] == req.body.commentId){
							already_liked = true;
						}
					}
					for(var j = 0; j < user.dislike.length; j++){
						if(user.dislike[i] == req.body.commentId){
							already_disliked = true;
						}
					}
					if(already_disliked == false && already_liked == false){
						console.log('adding like to user');
						User.findOneAndUpdate({_id: req.body.userId}, {$push: {likes: req.body.commentId}}, function(err, result){
							if(err){
								res.json({errors: {error: "error adding comment to user"}})
							}else{
								Comment.findOneAndUpdate({_id: req.body.commentId}, {$inc: {likes: 1}}, function(err, updated){
									if(err){
										res.json({errors: {error: "error updating likes on comment"}})
									}else{
										res.json({status: "success"});
									}
								});
							}
						});
					}else{
						res.json({errors: {error: "error because user already liked this"}});
					}
				}else{
					res.json({errors: {error: "User not signed in"}})
				}
			})
		},
		dislike: function(req, res){
			User.findOne({_id: req.body.userId}, function(err, user){
				if(user){
					already_liked = false;
					already_disliked = false;

					for(var i = 0; i < user.likes.length; i++){
						if(user.likes[i] == req.body.commentId){
							already_liked = true;
						}
					}
					for(var j = 0; j < user.dislike.length; j++){
						if(user.dislike[j] == req.body.commentId){
							already_disliked = true;
						}
					}
					if(already_disliked == false && already_liked == false){
						User.findOneAndUpdate({_id: req.body.userId}, {$push: {dislike: req.body.commentId}}, function(err, result){
							if(err){
								res.json({errors: {error: "error adding comment to user"}})
							}else{
								Comment.findOneAndUpdate({_id: req.body.commentId}, {$inc: {dislikes: 1}}, function(err, updated){
									if(err){
										res.json({errors: {error: "error updating likes on comment"}})
									}else{
										res.json({status: "success"});
									}
								});
							}
						});
					}else{
						res.json({errors: {error: "error"}});
					}
				}else{
					res.json({errors: {error: "user not signed in"}});
				}
			})
		}
	}

})();
