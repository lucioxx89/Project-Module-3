const mongoose = require('mongoose');

const { Schema } = mongoose;

const expenseSchema = new Schema({
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
		type: String,
		enum: ['Home', 'Grocery', 'Health', 'Travel', 'Other'],
	},

	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

const Expenses = mongoose.model('Expenses', expenseSchema);

module.exports = Expenses;
