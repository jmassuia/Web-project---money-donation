
exports.up = function(knex) {

    return knex.schema.createTable('incidents',function(table){
        table.increments()
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('id_incident').notNullable();

        table.foreign('id_incident').references('id').inTable('ongs');
    })

};

exports.down = function(knex) {

    return knex.schema.dropTable('incidents');

};
