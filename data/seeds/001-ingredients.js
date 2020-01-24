
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: "Onion" },
        { name: "Bok Choy" },
        { name: "Potato" },
        { name: "Carrot" }
      ]);
    });
};
