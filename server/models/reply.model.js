var ReplySchema = new mongoose.Schema({
	reply: {
		type: String,
		required: [true, 'Message field cannot be empty']
	},
  	username: {
	  type: String,
	  required: [true, "Must have a username to link to the reply"]
  	}
}, {timestamps: true});

mongoose.model('Reply', ReplySchema);
