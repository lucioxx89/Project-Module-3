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

// Find an transaction by id
router.get('/:id', (req, res, next) => {
	const { id } = req.params;
	const { currentUser } = req.session;

	Transactions.findById(id)
		.then(findTransaction => {
			if (findTransaction.userId !== currentUser._id) {
				res.json({ error: 'This is not your transaction!!!' });
			} else {
				res.json({ found: findTransaction });
			}
		})
		.catch(error => {
			next(error);
		});
});

// create new transactions
router.post('/', (req, res, next) => {
	const { date, name, amount, description, categories } = req.body;
	const { currentUser } = req.session;
	const userId = currentUser._id;

	Transactions.create({ date, name, amount, description, categories, userId })
		.then(newTransaction => {
			res.json({ created: newTransaction });
		})
		.catch(error => {
			next(error);
		});
});

// edit an transaction
router.put('/:id', (req, res, next) => {
	const { date, name, amount, description, categories } = req.body;
	const { id } = req.params;

	Transactions.findByIdAndUpdate(id, { date, name, amount, description, categories }, { new: true })
		.then(updateTransaction => {
			res.json({ updated: updateTransaction });
		})
		.catch(error => {
			next(error);
		});
});

// Delete event
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
