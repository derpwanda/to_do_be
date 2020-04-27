
exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl.string('username', 16)
            .notNullable()
            .unique()

        tbl.string('password', 128).notNullable()
    })
        .createTable('notes', tbl => {
            tbl.increments();

            tbl
                .string('title', 128)
                .notNullable()
                .unique();

            tbl
                .text('note_text', 256)
                .notNullable()
            tbl
                .integer('user_id')
                .unsigned()
                .notNullable()
                .references('id').inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('notes')
        .dropTableIfExists('users')
};
