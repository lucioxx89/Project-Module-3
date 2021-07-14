const express = require('express');

const Expenses = require('../models/Expenses');

const router = express.Router();

// Find - show expenses
router.get('/', (req, res, next) => {
	Expenses.find({})
		.then(findExpense => {
			res.json({ findExpense });
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
			res.json({ createdExpense: newExpense });
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
		.then(editExpense => {
			res.json({ editeddExpense: editExpense });
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
		.then(editExpense => {
			res.json({ update: editExpense });
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
