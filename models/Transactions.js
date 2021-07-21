const mongoose = require('mongoose');

const { Schema } = mongoose;

const transactionSchema = new Schema({
	date: {
		type: String,
		required: true,
	},

	name: {
		type: String,
		required: true,
	},

	amount: {
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

const Transactions = mongoose.model('Transactions', transactionSchema);

module.exports = Transactions;
