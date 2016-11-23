
var Quote = mongoose.model('Quote');

module.exports = (function(){

	return{
		create: function(req, res){
			var quote = new Quote(req.body);
			quote.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.json({status: 'success'});
				}
			})
    	},
		index: function(req, res){
			Quote.find({}, function(err, quote){
				if(err){
					console.log(err);
				}else{
					res.json(quote);
				}
			});
		},
		latest: function(req, res){
			Quote.findOne().sort({field: 'asc', _id: -1}).limit(1).exec(function(err, quote){
				console.log(quote);
				if(err){
					console.log(err);
				}else{
					res.json(quote);
				}
			});
		}
	}

})();
