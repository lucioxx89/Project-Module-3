const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},

	cost: {
		type: Number,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},

	categories: {
		enum: ['Home', 'Grocery', 'Health', 'Travel', 'Other'],
	},
});

const Expenses = mongoose.model('Expenses', userSchema);

module.exports = Expenses;
