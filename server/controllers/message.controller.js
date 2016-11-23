
var Messages = mongoose.model('Messages');

module.exports = (function(){

	return{
		save: function(req, res){
			var message = new Messages(req.body);
			message.save(function(err){
				if(err){
					res.json(err);
				}
				else{
					var mailOptions = {
					  from: "'brandon s' <theoutcast92@yahoo.com",
					  to: "'brandon s' <scott.01091992@gmail.com",
					  subject: 'Message Alert From Portfolio',
					  text: 'You have a new message',
					  html: '<h2>'+req.body.name+'</h2><br><h3>'+req.body.email+'</h3><br><h5>'+req.body.subject+'</h5><br><h4>'+req.body.message+'</h4>'
					};

					transporter.sendMail(mailOptions, function(error, info){
					    if(error){
					        return console.log(error);
					    }
					    console.log('Message sent: ' + info.response);
					});
					res.json({status: "success"});
				}
			});
		}
	}

})();
