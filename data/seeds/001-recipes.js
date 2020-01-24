
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: "French Onion Soup" },
        { name: "French Fries" },
        { name: "Roasted Carrots" }
      ]);
    });
};
