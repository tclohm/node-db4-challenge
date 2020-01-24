const express = require('express');
const Recipes = require('./recipes-model.js');
const router = express.Router();

router.get('/', (req, res) => {
	Recipes.getRecipes()
	.then(recipes => {
		res.json(recipes)
	})
	.catch(err => {
		res.status(500).json({ message: 'Failed to get recipes' })
	});
});

router.get('/:id/shoppingList', (req, res) => {
	const { id } = req.params;
	Recipes.getShoppingList(id)
		.then(list => {
			if (list) {
				res.json(list)
			} else {
				res.status(404).json({ message: 'Could not find list with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get list' });
		});
});

router.get('/:id/instructions', (req, res) => {
	const { id } = req.params;
	Recipes.getInstructions(id)
		.then(recipe => {
			if (recipe) {
				res.json(recipe);
			} else {
				res.status(404).json({ message: 'Could not find instructions with given id' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get instructions' });
		})
});

module.exports = router;