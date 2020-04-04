
exports.up = function(knex) {
  
  return knex.schema.createTable('doadores',function(table){
        table.increments();

        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.string('city').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('doadores');
};
