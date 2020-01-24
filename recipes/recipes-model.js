const db = require('../data/db-config.js');

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions
};

function getRecipes() {
	return db('recipes');
};

function getShoppingList(recipe_id) {
	if(recipe_id) {
		return db('recipe-ingredients as ri')
		.join('recipes', 'ri.recipe_id', 'recipes.id')
		.join('ingredients', 'ri.ingredient_id', 'ingredients.id')
		.where("recipe_id", recipe_id)
		.select('ingredients.name as ingredient', 'ri.quantity', 'recipes.name as recipe');

	}
	return null;
};

function getInstructions(recipe_id) {
	if(recipe_id) {
		return db('steps')
			.where("recipe_id", recipe_id)
			.select("steps.step_number", "steps.instructions");
	}
	return null;
}