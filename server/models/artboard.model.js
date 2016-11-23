var ArtboardSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title field cannot be empty']
	},
	description: {
	    type: String,
		required: [true, 'Must provide a description']
	},
	imgUrl: {
		type: String,
		required: [true, "Must provide an image url"]
	},
	tags: {
		type: [String],
		required: [true, 'please leave at least 1 tag']
	},
	_comments: {
	  type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
	}
}, {timestamps: true});

mongoose.model('Artboard', ArtboardSchema);
