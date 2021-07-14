const express = require('express');

const Expenses = require('../models/Expenses');

const router = express.Router();

// Find  all expenses
router.get('/', (req, res, next) => {
	Expenses.find({})
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

	Expenses.findById(id)
		.then(findExpense => {
			res.json({ found: findExpense });
		})
		.catch(error => {
			next(error);
		});
});

// create new expenses
router.post('/', (req, res, next) => {
	const { name, cost, description, categories } = req.body;

	Expenses.create({ name, cost, description, categories })
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
