
var Reply = mongoose.model('Reply');
var Artboard = mongoose.model('Artboard');
var Comments = mongoose.model('Comment');
var User = mongoose.model('User');

module.exports = (function(){

	return{
		create: function(req, res){
			if(req.session){
				req.body.username = req.session.user.name;
				var reply = new Reply(req.body);
				reply.save(function(err){
					if(err){
						console.log(err);
					}
					else{
						Comments.findByIdAndUpdate({_id: req.body._comment}, {$push: {_replies: reply._id}}, function(err){
							if(err){
								console.log(err);
							}else{
								res.json(reply);
							}
						})
					}
				});
			}else{
				res.json({errors: {message: "User is not signed in"}})
			}

    	}
	}

})();
