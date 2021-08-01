const mongoose = require('mongoose');

const { Schema } = mongoose;

const transactionSchema = new Schema({
	date: {
		type: Date,
		required: true,
	},

	payee: {
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

	category: {
		type: String,
		enum: ['Home', 'Restaurant', 'Health', 'Travel', 'Beauty', 'Supermarket', 'Other'],
	},

	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

const Transactions = mongoose.model('Transactions', transactionSchema);

module.exports = Transactions;
