const express = require('express');

const router = express.Router();

const User = require('../models/User');

const { checkIfLoggedIn } = require('../middlewares');

// Profile route
router.get('/profile', checkIfLoggedIn, (req, res, next) => {
	res.json({ user: req.session.currentUser });
});

// Edit profile route

router.put('/profile/:id', (req, res, next) => {
	const { username, password } = req.body;
	const { id } = req.params;

	User.findByIdAndUpdate(id, { username, password }, { new: true })
		.then(updatedUser => {
			res.json({ updated: updatedUser });
		})
		.catch(error => {
			next(error);
		});
});

// router.get('/mybooks', (req, res, next) => {
//   const userId = req.session.currentUser._id;
  // User.findById(userId)
  //   .populate('myBooks')
  //   .then(dbUser => {
  //     console.log(dbUser);
  //     res.json({ book: dbUser.myBooks });
  //   })
  //   .catch(error => next(error));
// });


module.exports = router;
