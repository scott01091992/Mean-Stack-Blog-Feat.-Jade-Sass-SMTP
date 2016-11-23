var QuoteSchema = new mongoose.Schema({
	quote: {
		type: String
	}
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);
