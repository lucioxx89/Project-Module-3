const express = require('express');

const Transactions = require('../models/Transactions');

const router = express.Router();

// Find  all transactions
router.get('/', (req, res, next) => {
	const { currentUser } = req.session;

	Transactions.find({ userId: currentUser._id })
		.then(findTransactions => {
			res.json({ found: findTransactions });
		})
		.catch(error => {
			next(error);
		});
});

// Find a transaction by id
router.get('/:id', (req, res, next) => {
	const { id } = req.params;

	const { currentUser } = req.session;

	Transactions.findById(id)

		.then(findTransaction => {
			if (findTransaction.userId != currentUser._id) {
				res.json({ error: 'This is not your transaction!!!' });
			} else {
				res.json({ found: findTransaction });
			}
		})
		.catch(error => {
			next(error);
		});
});

// Create new transactions
router.post('/', (req, res, next) => {
	const { date, payee, amount, description, category } = req.body;
	const { currentUser } = req.session;
	const userId = currentUser._id;

	Transactions.create({ date, payee, amount, description, category, userId })
		.then(newTransaction => {
			res.json({ created: newTransaction });
		})
		.catch(error => {
			next(error);
		});
});

// Edit a transaction
router.put('/:id', (req, res, next) => {
	const { date, payee, amount, description, category } = req.body;
	const { id } = req.params;

	Transactions.findByIdAndUpdate(id, { date, payee, amount, description, category }, { new: true })
		.then(updateTransaction => {
			res.json({ updated: updateTransaction });
		})
		.catch(error => {
			next(error);
		});
});

// Delete transaction
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	Transactions.findByIdAndDelete(id)
		.then(deletedTransaction => {
			res.json({ deleted: deletedTransaction });
		})
		.catch(error => {
			next(error);
		});
});
module.exports = router;
