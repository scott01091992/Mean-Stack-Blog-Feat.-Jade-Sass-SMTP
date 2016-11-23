var Users = mongoose.model('User');

module.exports = (function(){

	return{
		create: function(req, res){
			Users.findOne({email: req.body.email}, function(err, user){
				if(user){
					res.json({errors:{username:{message: 'This username is already in use'}}});
				}
				else{
					if(req.body.password){
						req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
						var user = new Users(req.body);
						user.save(function(err){
							if(err){
								res.json(err);
							}
							else{
								res.json(user);
							}
						});
					}
					else{
						res.json({errors: {password: {message: "Password failed Authentication"}}});
					}
				}
			})
		},
		current_user: function(req, res){
			if(req.session.user){
				Users.findOne({_id: req.session.user._id}, function(err, user){
			        if (err){
	 					res.json(err);
			        }else{
			          res.json(user);
			        }
     			});
			}else{
 				req.session.destroy();
 				res.json({error:{message: 'User not in session'}});
			}
		},
		login: function(req, res){
			if(req.body.password){
				Users.findOne({email: req.body.email}, function(err, user){
					if(err){
						res.json(err);
					}
					else if(user){
						if(bcrypt.compareSync(req.body.password, user.password)){
							req.session.user = user;
							res.json({user: user._id, success: true});
						}
						else{
							res.json({message:'Authentication failed'});
						}
					}
					else{
						res.json({message: 'No account found'});
					}
				})
			}else{
				res.json({message: 'Must have email and Password'});
			}

		},
		logout: function(req, res) {
 		 	req.session.destroy();
 		 	res.redirect('/');
 		}
	}

})();
