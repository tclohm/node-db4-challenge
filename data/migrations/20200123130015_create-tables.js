exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
  	tbl.increments();
  	tbl.text('name', 128)
  		.notNullable();
  })
  .createTable('ingredients', tbl => {
  	tbl.increments();
  	tbl.text('name', 128)
  		.notNullable()
  		.unique();
  })
  .createTable('steps', tbl => {
  	tbl.increments();
  	tbl.integer('recipe_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('recipes')
  		.onUpdate('CASCADE')
  		.onDelete('CASCADE');
  	tbl.integer('step_number')
  		.unsigned()
  		.notNullable();
  	tbl.text('instructions', 255)
  		.notNullable();
  })
  .createTable('recipe-ingredients', tbl => {
  	tbl.increments();
  	tbl.integer('recipe_id')
  		.unsigned()
  		.references('id')
  		.inTable('recipes')
  		.onUpdate('CASCADE')
  		.onDelete('CASCADE');
  	tbl.integer('ingredient_id')
  		.unsigned()
  		.references('id')
  		.inTable('ingredients')
  		.onUpdate('CASCADE')
  		.onDelete('CASCADE');
  	tbl.float('quantity')
  		.notNullable();
  	tbl.unique(['recipe_id', 'ingredient_id'])
  })
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('recipe-ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes');
};
