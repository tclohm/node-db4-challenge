
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { 
          recipe_id: 1,
          step_number: 1,
          instructions: "do something..."
        },
        { 
          recipe_id: 1,
          step_number: 2,
          instructions: "do something...2"
        },
        { 
          recipe_id: 1,
          step_number: 3,
          instructions: "do something...3"
        },
        { 
          recipe_id: 2,
          step_number: 1,
          instructions: "hello world...1"
        },
        { 
          recipe_id: 2,
          step_number: 2,
          instructions: "hello world...2"
        },
        {
          recipe_id: 2,
          step_number: 3,
          instructions: "hello world...3"
        },
        { 
          recipe_id: 3,
          step_number: 1,
          instructions: "more instructions...1"
        },
        { 
          recipe_id: 3,
          step_number: 2,
          instructions: "more instructions...2"
        },
        {
          recipe_id: 3,
          step_number: 3,
          instructions: "more instructions...3"
        }
      ]);
    });
};
