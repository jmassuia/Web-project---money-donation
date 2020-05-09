
exports.up = function(knex) {
    
    return knex.schema.createTable('images', function(table){

        table.string('ong_id').notNullable();
        table.string('fileName').notNullable();
        table.binary('source');

        table.foreign('ong_id').references('id').inTable('ongs');

    });


};

exports.down = function(knex) {
  return knex.schema.dropTable('images');
};
