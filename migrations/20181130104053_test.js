
exports.up = function(knex, Promise) {
  return knex.schema.createTable('test', table => {
    table.increments().notNullable()
    table.string('name').notNullable().defaultTo('')
    table.string('favorite_color').notNullable().defaultTo('orange')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('test')
};
