var CommentSchema = new mongoose.Schema({
	comment: {
		type: String,
		required: [true, 'Message field cannot be empty']
	},
	_replies: {
		type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reply'}]
	},
	likes: {
		type: Number
	},
	dislikes: {
		type: Number
	},
	username: {
		type: String
	}
}, {timestamps: true});

mongoose.model('Comment', CommentSchema);
