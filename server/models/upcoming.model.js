var UpcomingSchema = new mongoose.Schema({
	content: {
        type: [String],
        required: true
    }
}, {timestamps: true});

mongoose.model('Upcoming', UpcomingSchema);
