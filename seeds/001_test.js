
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('test').del()
    .then(function () {
      // Inserts seed entries
      return knex('test').insert([
        {name: 'Teddi', favorite_color: 'purple'},
        {name: 'Brian', favorite_color: 'red'},
        {name: 'Ben'}
      ]);
    });
};
