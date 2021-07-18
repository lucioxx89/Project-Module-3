const express = require('express');

const Expenses = require('../models/Expenses');

const router = express.Router();

// Find  all expenses
router.get('/', (req, res, next) => {
	const { currentUser } = req.session;

	Expenses.find({ userId: currentUser._id })
		.then(findExpenses => {
			res.json({ found: findExpenses });
		})
		.catch(error => {
			next(error);
		});
});

// Find an expense by id
router.get('/:id', (req, res, next) => {
	const { id } = req.params;
	const { currentUser } = req.session;

	Expenses.findById(id)
		.then(findExpense => {
			if (findExpense.userId !== currentUser._id) {
				res.json({ error: 'This is not your expense!!!' });
			} else {
				res.json({ found: findExpense });
			}
		})
		.catch(error => {
			next(error);
		});
});

// create new expenses
router.post('/', (req, res, next) => {
	const { name, cost, description, categories } = req.body;
	const { currentUser } = req.session;
	const userId = currentUser._id;

	Expenses.create({ name, cost, description, categories, userId })
		.then(newExpense => {
			res.json({ created: newExpense });
		})
		.catch(error => {
			next(error);
		});
});

// edit an expense
router.put('/:id', (req, res, next) => {
	const { name, cost, description, categories } = req.body;
	const { id } = req.params;

	Expenses.findByIdAndUpdate(id, { name, cost, description, categories }, { new: true })
		.then(updateExpense => {
			res.json({ updated: updateExpense });
		})
		.catch(error => {
			next(error);
		});
});

// Delete event
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	Expenses.findByIdAndDelete(id)
		.then(deletedExpense => {
			res.json({ deleted: deletedExpense });
		})
		.catch(error => {
			next(error);
		});
});
module.exports = router;
