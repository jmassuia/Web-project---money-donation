
exports.up = function(knex) {

    return knex.schema.createTable('incidents',function(table){
        table.increments()
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('valueGol').notNullable();
        table.string('ong_id').notNullable();
        table.string('incUrl').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
        table.foreign('incUrl').references('ImageUrl').inTable('ongs');
    })

};

exports.down = function(knex) {

    return knex.schema.dropTable('incidents');

};
