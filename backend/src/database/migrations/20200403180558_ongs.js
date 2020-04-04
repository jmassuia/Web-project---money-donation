
exports.up = function(knex) {

    return knex.schema.createTable('ongs',function(table){
        table.string('id').first().notNullable();

        table.string('name').notNullable();
        table.string('CNPJ').notNullable();
        table.string('email').notNullable();
        table.string('bankAgency').notNullable();
        table.string('bankAccount').notNullable();
        
    })
};

exports.down = function(knex) {

    return knex.schema.dropTable('ongs');

};
