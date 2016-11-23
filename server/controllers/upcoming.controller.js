
var Upcoming = mongoose.model('Upcoming');

module.exports = (function(){

	return{
		create: function(req, res){
			console.log(req.body);
			var upcoming = new Upcoming(req.body);
			console.log(upcoming);
			upcoming.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.json({status: 'success'});
				}
			})
    	},
		index: function(req, res){
			Upcoming.find({}, function(err, upcoming){
				if(err){
					console.log(err);
				}else{
					res.json(upcoming);
				}
			});
		},
		latest: function(req, res){
			Upcoming.findOne().sort({field: 'asc', _id: -1}).limit(1).exec(function(err, upcoming){
				if(err){
					console.log(err);
				}else{
					res.json(upcoming);
				}
			});
		}
	}

})();
