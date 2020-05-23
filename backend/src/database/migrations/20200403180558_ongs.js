
exports.up = function(knex) {

    return knex.schema.createTable('ongs',function(table){
        table.increments('id');
        table.string('name').notNullable().unique();
        table.string('CNPJ').notNullable().unique();
        table.string('email').notNullable().unique();
        table.string('phone',14).notNullable().unique();
        table.string('bankAgency').notNullable();
        table.string('bankAccount').notNullable().unique();
        table.string('ImageUrl');
        table.string('password').notNullable();
    })
};

exports.down = function(knex) {

    return knex.schema.dropTable('ongs');

};
