
exports.up = function(knex) {

    return knex.schema.createTable('causas',function(table){
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('id_causas').notNullable();

        table.foreign('id_causas').references('id').inTable('ongs');
    })

};

exports.down = function(knex) {

    return knex.schema.dropTable('causas');

};
